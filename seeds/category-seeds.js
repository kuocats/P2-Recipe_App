const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Breakfast",
  },
  {
    category_name: "Branch",
  },
  {
    category_name: "Lunch",
  },
  {
    category_name: "Dinner",
  },
  {
    category_name: "Salads",
  },
  {
    category_name: "Burgers",
  },
  {
    category_name: "Desserts",
  },
  {
    category_name: "Pizza",
  },
  {
    category_name: "Seafood",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
