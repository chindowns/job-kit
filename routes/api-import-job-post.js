// var cheerio = require("cheerio");
var axios = require("axios");
var fetch = require('node-fetch');

module.exports = function(app) {
    var jobPost = {}

    app.get("/api/import/", (req, res) => {
        // console.log(req)
        console.log("getting job post")
        console.log(req.query.link)

        // Getting information from the JobPosting URL.
        // axios.get("req.query.link")
        fetch('https://api.linkedin.com/v1/jobs/1850712285')
        .then(function(response) {
            // Load the Response into cheerio and save it to a variable
            // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'

            // var $ = cheerio.load(response.data);
            console.log(response)
            // An empty array to save the data that we'll scrape
            // var jobPosting = {};
            // if the URL is LinkedIn use the following
            // if (req.query.link.includes("linkedin")) {
            //     // find the title
            //     // Parse the title into Title, Company, Location
            //     const titleEl = $('title');
            //     const titleTxt = $(titleEl).text();

            //     const companyIndex = titleTxt.indexOf('hiring');
            //     const titleIndex = titleTxt.indexOf(' in ');
            //     const locationIndex = titleTxt.indexOf(' | ');

            //     const title = titleTxt.slice(companyIndex + 7, titleIndex)
            //     const company = (titleTxt.slice(0, companyIndex - 1));
            //     const location = titleTxt.slice(titleIndex + 4, locationIndex);

            //     // Add Title, Company, Location to the JopPosting object

            //     jobPosting.title = title;
            //     jobPosting.company = company;
            //     jobPosting.location = location;

            //     const descriptionEl = $('section.description');
            //     const descriptionTxt = $(descriptionEl).text();

            //     jobPosting.description = descriptionTxt;
            //     // Log the results once you've looped through each of the elements found with cheerio
            //     console.log(jobPosting);

            //     res.json(jobPosting);

            // }

        })
        .catch(err => console.log(err));
    })
}