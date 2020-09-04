const db = require("../models");

//Defining methods for the UserController
module.exports = {
    create: (req, res) => {
        console.log('Submit New Application', req.body)
        db.Application.create(req.body)
        .then(dbResults => {res.json(dbResults.id)})
        .catch(err => res.status(422).json(err));
    },

    // Find All Applications for a specific USER
    findAllUserApps: (req, res) => {
        console.log(`Find All User ${req.params.userId} Applications`);
        db.Application.findAll({
            where: {UserId: req.params.userId},
            include: [db.Note]
            })
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err));
    },

    findOne: (req, res) => {
        db.Application.findOne({
            where: {id: req.params.id},
            include: [db.Note]
        })
        .then(dbResults => { res.json(dbResults) })
        .catch(err => res.status(422).json(err));
    },

    update: (req, res) => {
        console.log(`Updating Application ${req.params.id} for ${req.params.userId}`)
        db.Application.update(req.body, {
            where: { id: req.params.id },
            include: [{model: db.Note}]
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