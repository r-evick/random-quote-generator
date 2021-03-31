/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
{
  quote: "Quote here",
  source: "Source here",
  citation: "Book, movie, or song here",
  year: "Year here"
},
{
  quote: "Quote here",
  source: "Source here",
  citation: "Book, movie, or song here",
  year: "Year here"
},
{
  quote: "Quote here",
  source: "Source here",
  citation: "Book, movie, or song here",
  year: "Year here"
},
{
  quote: "Quote here",
  source: "Source here",
  citation: "Book, movie, or song here",
  year: "Year here"
},
{
  quote: "Quote here",
  source: "Source here",
  citation: "Book, movie, or song here",
  year: "Year here"
},

];


console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array

  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable

  // 3. Return the variable storing the random quote object
  console.log();
}

getRandomQuote();


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);