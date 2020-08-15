
const express = require("express");
var admin = require("firebase-admin");

// Set up the Express App
var app = express();
var PORT = process.env.PORT || 3300;

// Static Directory
app.use(express.static("public"));

// Requiring our Models for Syncing
var db = require("./models");

// Parse Request Body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.MODE_ENV === "production") {
    app.use(express.static("client/build"))
}

// Routes
app.use(routes);

// Syncing Sequelize Models
db.sequelize.sync().then(function () {
    // Starting Express app
    app.listen(PORT, function () {
        console.log("Server listening at localhost:" + PORT);
    });
});