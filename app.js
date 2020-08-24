require('dotenv').config();
const express = require("express");
const db = require("./models");
const routes = require('./routes');

// Set up the Express App
const app = express();
const PORT = process.env.PORT;


// Parse Request Body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(routes);

if (process.env.MODE_ENV === "production") {
    app.use(express.static("client/build"))
}

// Syncing Sequelize Models
db.sequelize.sync().then(function () {
    // Starting Express app
    app.listen(PORT, function () {
        console.log("Server listening at localhost:" + PORT);
    });
});