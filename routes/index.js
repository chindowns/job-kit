const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//API Routes
router.use("/api", apiRoutes);

router.get("*", function (req, res) {
    res.sendFile(path.join(_dirname, "../client/build/index.html"))
})

module.exports = router;