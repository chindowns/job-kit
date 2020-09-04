const db = require("../models");

module.exports = {
    create: (req, res) => {
        console.log("Add New Note for Application "+req.body.ApplicationId)
        db.Note.create(req.body)
            .then(dbResults => res.json(dbResults))
            .catch(err => res.status(422).json(err));
    },

    findAll: (req, res) => {
        console.log(`Find All Notess`)
        db.Note.findAll({})
            .then(dbResults => res.json(dbResults))
            .catch(err => res.status(422).json(err));
    },

    findOne: (req, res) => {
        console.log(req);
        db.Note.findOne(
            {
            where: { id: req.params.id },
            }
        )
            .then(dbResults => res.json(dbResults))
        .catch(err => res.status(422).json(err));
    },

    update: function (req, res) {
        db.Note.update(req.body,
            { where: { id: req.body.id } })
            .then(dbResults => res.json(dbResults))
            .catch(err => res.status(422).json(err));
    },

    destroy: (req, res) => {
        db.Note.destroy({
            where: req.body
        })
        .then(dbResults => res.json(dbResults))
        .catch(err => res.status(422).json(err));
    }
}