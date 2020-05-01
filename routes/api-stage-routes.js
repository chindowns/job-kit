var db = require("../models");

function renderStage(stages, res, partial) {
    if (partial === undefined) {
        return res.json(stages);
    }
    var newStages = stages;
    // If a single object add to an array
    if (!Array.isArray(stages)) {
        newStages = [stages];
    }
    var arrOfObjs = newStages.map(({dataValues: {id, currentStage, dateCurrentStage, nextStep, notes}}) => ({
        id,
        currentStage,
        dateCurrentStage,
        nextStep,
        notes
    }));

    // console.log(arrOfObjs)
    var x = {
        layout: false,
        applications: arrOfObjs
    }

    // Partial: "partials/jobs/application-block"
    res.render(partial, x);
}


module.exports = function (app) {
 
    // Get All Stages for Application
    app.get("/api/application/:applicationId/stage/all", (req, res) => {
        db.Stage.findAll({
            where: {
                ApplicationId: req.params.applicationId
            }
        }).then(stages => {
            // Add partial ad third argument
            renderStage(stages, res);
        }).catch(err => {
            console.log(err);
            res.send(false);
        });  
    });

    // Get One Stage for Application
    app.get("/api/stage/:stageId", (req, res) => {
        db.Stage.findOne({
            where: {
                ApplicationId: req.params.applicationId,
                id: req.params.stageId
            }
        }).then(stage => {
            // Add partial ad third argument
            renderStage(stage, res);
        }).catch(err => {
            console.log(err);
            res.send("No data found");
        });
    });

    // Get All Stage - Applied, Behavioral Interview, etc.
    //  * Need to add by User
    app.get("/api/stage/all/:field", (req, res) => {
        db.Stage.findAll({
            attributes: [req.params.field]
        }).then(fieldList => {
            const fieldArray = fieldList.map(app => Object.values(app.dataValues))

            var hbsObj = {
                layout: false,
                fieldList: fieldArray
            }
            res.render("partials/commonUI/filter-block", hbsObj);
        }).catch(err => {
            console.log(err);
            res.send("No data found");
        });
    });

    // Create New Stage
    app.post("/api/stage/new", (req, res) => {
        // ApplicationId sent from client
        db.Stage.create(req.body, {
            where: {
                ApplicationId: req.body.applicationId
            }
        }).then(stage => {
            res.send(`Stage, ${stage.currentStage}, has been created`)
        }).catch(err => {
            console.log(err);
            res.send(`Stage, ${stage.currentStage}, was NOT created`)
        });
    });

     // Update Stage
     app.put("/api/stage/:stageId", (req, res) => {
        db.Stage.update(req.body, {
            where: {
                id: req.params.stageId
            },
        }).then(() => {
            res.json("Completed");
        }).catch(err => {
            console.log(err);
            res.send("Failed to update");
        });  
    });

    // Delete Stage
    app.delete("/api/stage/:stageId", (req, res) => {
        db.Stage.destroy({
            where: {
                id: req.params.stageId
            },
        }).then((rowsDeleted) => {
            rowsDeleted ? res.send(true) : res.send(false);
        }).catch(err => {
            console.log(err);
            res.send(false);
        });
    });
}