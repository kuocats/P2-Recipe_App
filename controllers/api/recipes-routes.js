const router = require("express").Router();
const {
  Recipe,
  Category,
  Ingredient,
  RecipeIngredient,
  User,
} = require("../../models");

const multer = require("multer");
const upload = multer({ dest: "uploads/" }); // Set the destination folder for uploaded files
const slugify = require("slugify");
const { Op } = require("sequelize");

// The `/api/Recipes` endpoint

// Get all Recipes
router.get("/", (req, res) => {
  Recipe.findAll({
    include: [
      { model: Category, as: "category" },
      { model: Ingredient, as: "ingredients" },
      { model: User, as: "user" },
    ],
  }).then((recipeData) => {
    res.json(recipeData);
  });
});

// Get one Recipe
router.get("/:name", (req, res) => {
  const recipeName = req.params.name;
  const searchWord = req.query.word;

  const searchWords = searchWord ? searchWord.split(" ") : [];

  const conditions = searchWords.map((word) => ({
    recipe_name: {
      [Op.like]: `%${word}%`,
    },
  }));

  Recipe.findOne({
    where: {
      recipe_name: recipeName,
      [Op.or]: conditions,
    },
    include: [
      { model: Category, as: "category" },
      { model: Ingredient, as: "ingredients" },
      { model: User, as: "user" },
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

// Create new Recipe

router.post("/", upload.single("photo"), (req, res) => {
  /* req.body should look like this...
    {
      picture: "uploads/image.jpg"
      recipe_name: "Butter Chicken",
      recipe_text: "Recipe instructions...",
      cook_time: 3,
      category_id: 1,
      ingredientNames: ["Chicken", "Butter", "Salt", "Pepper"]
    }
  */

  const {
    picture,
    recipe_name,
    recipe_text,
    cook_time,
    category_id,
    ingredientNames,
  } = req.body;
  const slug = slugify(req.body.recipe_name, { lower: true });
  Recipe.create({
    picture: req.file ? req.file.filename : picture,
    recipe_name,
    recipe_text,
    cook_time,
    category_id,
    user_id: req.session.user_id, // Set the user_id to the logged-in user's ID
  })
    .then((recipe) => {
      if (Array.isArray(ingredientNames) && ingredientNames.length) {
        const RecipeIngredientArr = ingredientNames.map((ingredientName) => {
          return Ingredient.findOrCreate({ where: { name: ingredientName } })
            .then(([ingredient]) => ingredient)
            .then((ingredient) => {
              return {
                recipe_id: recipe.id,
                ingredient_id: ingredient.id,
              };
            });
        });
        return Promise.all(RecipeIngredientArr).then((recipeIngredients) => {
          return RecipeIngredient.bulkCreate(recipeIngredients);
        });
      }
      return recipe;
    })
    .then((recipe) => {
      res.status(200).json({ message: "Recipe created", slug: slug });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Update Recipe
router.put("/:name", upload.single("photo"), (req, res) => {
  const updatedRecipe = {
    recipe_name: req.body.recipe_name,
    recipe_text: req.body.recipe_text,
    cook_time: req.body.cook_time,
    category_id: req.body.category_id,
    picture: req.file ? req.file.filename : req.body.picture,
  };

  Recipe.update(updatedRecipe, {
    where: {
      recipe_name: req.params.name,
      user_id: req.session.user_id, // Make sure to include user_id in the WHERE condition
    },
  })
    .then(() => {
      return Recipe.findOne({
        where: {
          recipe_name: req.body.recipe_name,
        },
      });
    })
    .then((updatedRecipe) => {
      const slug = slugify(updatedRecipe.recipe_name, { lower: true });

      return updatedRecipe.update({ slug: slug });
    })
    .then(() => {
      res.json({ message: "Recipe updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Delete Recipe
router.delete("/:id", (req, res) => {
  Recipe.destroy({
    where: {
      id: req.params.id,
      user_id: req.session.user_id, // Make sure to include user_id in the WHERE condition
    },
  })
    .then(() => {
      res.json({ message: "Recipe deleted" });
    })
    .catch((err) => res.json(err));
});

module.exports = router;
