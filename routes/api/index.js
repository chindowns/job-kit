const router = require("express").Router();

const applicationRoutes = require("./application")
const userRoutes = require("./user")
const notesRoutes = require("./notes")

router.use("/user", userRoutes);
router.use("/application", applicationRoutes);
router.use("/notes", notesRoutes);

module.exports = router;