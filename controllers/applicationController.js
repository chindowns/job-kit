const db = require("../models");

//Defining methods for the UserController
module.exports = {
    create: (req, res) => {
        db.Application.create(req.body)
        .then(dbResults => {res.json(dbResults.id)})
        .catch(err => res.status(422).json(err));
    },

    findAll: (req, res) => {
        db.Application.findAll({})
        .then(dbResults => {res.json(dbResults)})
        .catch(err => res.status(422).json(err));
    },

    findOne: (req, res) => {
        db.Application.findOne({
            where: {id: req.params.id},
            include: [db.Notes]
        })
        .then(dbResults => { res.json(dbResults) })
        .catch(err => res.status(422).json(err));
    },

    update: (req, res) => {
        db.Application.findOne({
            where: { id: req.params.id },
            include: [db.Notes]
        })
            .then(dbResults => { res.json(dbResults) })
            .catch(err => res.status(422).json(err));
    },

}