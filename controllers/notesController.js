const db = require("../models");

//Defining methods for the NotesController
module.exports = {
    create: (req, res) => {
        db.Notes.create(req.body)
            .then(dbResults => res.json(dbResults))
            .catch(err => res.status(422).json(err));
    },

    findAll: (req, res) => {
        console.log(`Find All Notess`)
        db.Notes.findAll({})
            .then(dbResults => res.json(dbResults))
            .catch(err => res.status(422).json(err));
    },

    findOne: (req, res) => {
        console.log(req);
        db.Notes.findOne(
            {
            where: { id: req.params.id },
            }
        )
            .then(dbResults => res.json(dbResults))
        .catch(err => res.status(422).json(err));
    },

    update: function (req, res) {
        db.Notes.update(req.body,
            { where: { id: req.body.id } })
            .then(dbResults => res.json(dbResults))
            .catch(err => res.status(422).json(err));
    }
}