const router = require("express").Router();
const controller = require("../../controllers/notesController");

// Matches with /api/notes
router
    .route("/")
    .post(controller.create)
    .get(controller.findAll)
    .put(controller.update)
    .delete(controller.destroy);

// Matches with /api/notes/:id
router
    .route("/:id")
    .get(controller.findOne)
    .delete(controller.destroy);

module.exports = router;