const { Ingredient } = require("../models");

const ingredientData = [
  {
    ingredient_name: "Eggs",
  },
  {
    ingredient_name: "Beef",
  },
  {
    ingredient_name: "Bacon",
  },
  {
    ingredient_name: "Wheat bun",
  },
  {
    ingredient_name: "Cheese",
  },
  {
    ingredient_name: "Tomato",
  },
  {
    ingredient_name: "Marinara sauce",
  },
  {
    ingredient_name: "Olive oil",
  },
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredients;
