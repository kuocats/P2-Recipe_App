const seedCategories = require("./category-seeds");
const seedRecipes = require("./recipes-seeds");
const seedIngedients = require("./ingredients-seeds");
const seedRecipeIngredients = require("./recipe-ingredients-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedCategories();
  console.log("\n----- CATEGORIES SEEDED -----\n");

  await seedRecipes();
  console.log("\n----- RECIPES SEEDED -----\n");

  await seedIngedients();
  console.log("\n----- IMGREDIENTS SEEDED -----\n");

  await seedRecipeIngredients();
  console.log("\n----- RECIPE INGREDIENTS SEEDED -----\n");

  process.exit(0);
};

seedAll();
