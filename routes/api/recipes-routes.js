const router = require("express").Router();
const {
  Recipe,
  Category,
  Ingredient,
  RecipeIngredient,
} = require("../../models");

// The `/api/Recipes` endpoint

// get all Recipes
router.get("/", (req, res) => {
  // find all Recipes
  Recipe.findAll({
    // include its associated Category and Ingredient data
    include: [
      { model: Category, as: "category" },
      { model: Ingredient, as: "ingredients" },
    ],
  }).then((recipeData) => {
    res.json(recipeData);
  });
});

// get one Recipe
router.get("/:name", (req, res) => {
  const recipeName = req.params.name;

  // find a single Recipe by its `recipe_name`
  Recipe.findOne({
    where: { recipe_name: recipeName },
    include: [
      { model: Category, as: "category" },
      { model: Ingredient, as: "ingredients" },
    ],
  })
    .then((recipeData) => {
      res.json(recipeData);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json(err);
    });
});
// create new Recipe
router.post("/", (req, res) => {
  /* req.body should look like this...
    {
      recipe_name: "Butter Chicken",
      cook_time: 3,
      category_id: 1,
      ingredientNames: ["Chicken", "Butter", "Salt", "Pepper"]
    }
  */
  Recipe.create(req.body)
    .then((recipe) => {
      // if there are Recipe Ingredients, we need to create pairings to bulk create in the RecipeIngredient model
      if (
        Array.isArray(req.body.ingredientNames) &&
        req.body.ingredientNames.length
      ) {
        const RecipeIngredientArr = req.body.ingredientNames.map(
          (ingredientName) => {
            return Ingredient.findOrCreate({ where: { name: ingredientName } })
              .then(([ingredient]) => ingredient)
              .then((ingredient) => {
                return {
                  recipe_id: req.params.name,
                  ingredient_id: req.ingredient.id,
                };
              });
          }
        );
        return Promise.all(RecipeIngredientArr).then((recipeIngredients) => {
          return RecipeIngredient.bulkCreate(recipeIngredients);
        });
      }
      // if no Recipe ingredients, just respond
      return res.status(200).json(recipe);
    })
    .then(() => {
      res.status(200).json({ message: "Recipe created" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update Recipe
router.put("/:name", (req, res) => {
  // update Recipe data
  Recipe.update(req.body, {
    where: {
      recipe_name: req.params.name,
    },
  })
    .then((recipe) => {
      // find all associated ingredients from RecipeIngredient
      return RecipeIngredient.findAll({
        include: [
          {
            model: Recipe,
            where: { recipe_name: req.params.name },
          },
        ],
      });
    })
    .then((RecipeIngredients) => {
      // get list of current ingredient_ids
      const RecipeIngredientIds = RecipeIngredients.map(({ ingredient_id }) =>
        ingredient_id.toString()
      );
      // create filtered list of new ingredient_ids
      const newRecipeIngredients = req.body.ingredientNames
        .filter(
          (ingredientName) => !RecipeIngredientIds.includes(ingredientName)
        )
        .map((ingredientName) => {
          return Ingredient.findOrCreate({ where: { name: ingredientName } })
            .then(([ingredient]) => ingredient)
            .then((ingredient) => {
              return {
                recipe_id: req.recipe.id,
                ingredient_id: req.ingredient.id,
              };
            });
        });
      // figure out which ones to remove
      const RecipeIngredientsToRemove = RecipeIngredients.filter(
        ({ ingredient_id }) => !req.body.ingredientNames.includes(ingredient_id)
      ).map(({ id }) => id);

      // run both actions
      return Promise.all([
        RecipeIngredient.destroy({ where: { id: RecipeIngredientsToRemove } }),
        Promise.all(newRecipeIngredients).then((recipeIngredients) =>
          RecipeIngredient.bulkCreate(recipeIngredients)
        ),
      ]);
    })
    .then((updatedRecipeIngredients) => res.json({ message: "Recipe updated" }))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete one Recipe by its `id` value
  Recipe.destroy({ where: { id: req.params.id } })
    .then((recipeData) => {
      res.json({ message: "Recipe deleted" });
    })
    .catch((err) => res.json(err));
});

module.exports = router;
