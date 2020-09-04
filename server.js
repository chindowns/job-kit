if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require("express");
const app = express();

const db = require("./models");

const routes = require('./routes');

// Set up the Express App
const PORT = process.env.PORT | 8080;


// Parse Request Body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
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