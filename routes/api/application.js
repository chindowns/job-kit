const router = require("express").Router();
const controller = require("../../controllers/applicationController");

// Matches with /api/application
router
    .route("/")
    .post(controller.create)
    // .get(controller.findAll)
    .delete(controller.delete);

// Matches with /api/application/user/id for all appliactions by userId
router
    .route("/:userId")
    .get(controller.findAllUserApps);

// Matches with /api/application/:id
router
    .route("/:userId-:id")
    .get(controller.findOne)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;