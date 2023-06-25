const router = require("express").Router();
const categoryRoutes = require("./category-routes");
const recipesRoutes = require("./recipes-routes");
const ingredientsRoutes = require("./ingredients-routes");

router.use("/categories", categoryRoutes);
router.use("/recipes", recipesRoutes);
router.use("/ingredients", ingredientsRoutes);

module.exports = router;
