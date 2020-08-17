const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with /api/user
router
    .route("/")
    .post(userController.create)
    .get(userController.findAll)
    .put(userController.update)
    // .delete(userController.destroy);

// Matches with /api/user/:userEmail
router
    .route("/:userEmail")
    .get(userController.findOne)
    // .delete(userController.destroy);

module.exports = router;