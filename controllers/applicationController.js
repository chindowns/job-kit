const db = require("../models");

//Defining methods for the UserController
module.exports = {
    create: (req, res) => {
        console.log('Submit New Application', req.body)
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

    delete: (req, res) => {
        db.Application.destroy({
            where: {id: req.params.id}
        })
        .then(dbResults => res.send('Success'))
        .catch(err => res.send(422).json(err));
    }

}