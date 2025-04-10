const moment = require("moment");

// Display the current date in a nice format
const now = moment();
console.log(now.format("dddd, MMMM Do YYYY"));

// Compute years since November 26, 1976
const oldDate = moment("1976-11-26");
const yearsAgo = now.diff(oldDate, 'years');
console.log(`${yearsAgo} years ago`);
