const router = require("express").Router();
const categoryRoutes = require("./category-routes");
const recipesRoutes = require("./recipes-routes");
const ingredientsRoutes = require("./ingredients-routes");
const userRoutes = require("./user-routes");
const profileRoutes = require("./profile-routes");

router.use("/categories", categoryRoutes);
router.use("/recipes", recipesRoutes);
router.use("/ingredients", ingredientsRoutes);
router.use("/users", userRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
