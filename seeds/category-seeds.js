const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Breakfast",
  },
  {
    category_name: "Brunch",
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

const seedCategories = async () => {
  try {
    await Category.bulkCreate(categoryData);
    console.log("Categories seeded successfully.");
  } catch (error) {
    console.error("Error seeding categories:", error);
  }
};

module.exports = seedCategories;
