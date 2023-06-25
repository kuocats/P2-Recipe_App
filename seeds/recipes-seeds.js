const { Recipe } = require("../models");

const recipeData = [
  {
    recipe_name: "Fries eggs",
    cook_time: 10,
    category_id: 1,
  },
  {
    recipe_name: "Beef steak",
    cook_time: 15,
    category_id: 4,
  },
  {
    recipe_name: "Pizza Margherita",
    cook_time: 45,
    category_id: 8,
  },
  {
    recipe_name: "Scallops with lemon",
    cook_time: 10,
    category_id: 9,
  },
  {
    recipe_name: " Angus Burder with bacon",
    cook_time: 29,
    category_id: 3,
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
