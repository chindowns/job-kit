const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with /api/applicatoin
router
    .route("/")
    .post(userController.create)
    .get(userController.findAll)
    .put(userController.update)
    .delete(userController.destroy);

// Matches with /api/application/:id
router
    .route("/:id")
    .get(userController.findOne)
    .delete(userController.destroy);

module.exports = router;