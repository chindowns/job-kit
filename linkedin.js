var cheerio = require("cheerio");
var axios = require("axios");

// First, tell the console what server.js is doing
console.log("\nImporting data from the website link\n");

// Making a request via axios for reddit's "webdev" board. We are sure to use old.reddit due to changes in HTML structure for the new reddit. The page's Response is passed as our promise argument.
axios.get("https://www.linkedin.com/jobs/view/1899871482/?eBP=JOB_SEARCH_ORGANIC&recommendedFlavor=SKILL_ASSESSMENTS&refId=17377d63-5d1a-460f-b7ef-4b74b8f8f5d2&trk=flagship3_search_srp_jobs&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_jobs%3BaSsXruVWQJmxYfnk5N%2BJtQ%3D%3D&lici=7lWpvaaLQAKYkBWFrVintw%3D%3D").then(function(response) {
  // Load the Response into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'

  var $ = cheerio.load(response.data);
  
  // An empty array to save the data that we'll scrape
  var results = {};

  // With cheerio, find the title
  // Parse the title into Title, Company, Location
  const titleEl = $('title');
  const titleTxt = $(titleEl).text();

  const companyIndex = titleTxt.indexOf('hiring');
  const titleIndex = titleTxt.indexOf(' in ');
  const locationIndex = titleTxt.indexOf(' | ');

  const title = titleTxt.slice(companyIndex + 7, titleIndex)
  const company = (titleTxt.slice(0, companyIndex - 1));
  const location = titleTxt.slice(titleIndex+4, locationIndex);
  
  results.title = title;
  results.company = company;
  results.location = location;

  const descriptionEl = $('section.description');
  const descriptionTxt = $(descriptionEl).text();
  

  results.description = descriptionTxt;
  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
});
