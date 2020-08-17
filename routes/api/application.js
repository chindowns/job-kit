const router = require("express").Router();
const controller = require("../../controllers/applicationController");

// Matches with /api/application
router
    .route("/")
    .post(controller.create)
    .get(controller.findAll)
    .put(controller.update)
    .delete(controller.delete);

// Matches with /api/application/:id
router
    .route("/:id")
    .get(controller.findOne)
    .delete(controller.delete);

module.exports = router;