const db = require("../models");

//Defining methods for the UserController
module.exports = {
    create: (req, res) => {
        console.log(`Create user ${req.body.email}`);
        db.User.create(req.body)
            .then(dbUser => {
                let User = {
                    id: dbUser.dataValues.id,
                    email: dbUser.dataValues.email
                }
                res.json(User)
                console.log("-------------- dbUser --------------")
                console.log(dbUser)

                console.log("------------------------------------")
                console.log("============= User ==================")
                console.log(User)
            })
            .catch(err => res.status(422).json(err));
    },

    findAll: (req, res) => {
        console.log(`Find All Users`)
        db.User.findAll({})
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },

    findOne: (req, res) => {
        console.log(req.params.userEmail);
        db.User.findOne({
            where: { email: req.params.userEmail },
        })
            .then(dbUser => {
                let User = {
                    id: dbUser.dataValues.id,
                    email: dbUser.dataValues.email
                }
                res.json(User)
                console.log("-------------- dbUser --------------")
                console.log(dbUser)
                
                console.log("------------------------------------")
                console.log("============= User ==================")
                console.log(User)
            })
            .catch(err => res.status(422).json(err));
    },

    update: function (req, res) {
        db.User.update(req.body,
            { where: { email: req.body.email } })
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
}