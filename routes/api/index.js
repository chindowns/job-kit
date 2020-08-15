const router = require("express").Router();

const applicationRoutes = require("./application")
const userRoutes = require("./user")

router.use("/user", userRoutes);

router.use("/application", applicationRoutes);

module.exports = router;