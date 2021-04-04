/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Code by: Ryan Evick
******************************************/

//the below quotes array stores quotes and other objects.

let quotes = [
{
  quote: "No, I am your father.",
  source: "Darth Vader",
  citation: "Star Wars: Episode V - The Empire Strikes Back",
  year: "1980",
  site: "www.starwars.com"
},
{
  quote: "Keep your face always toward the sunshine - and shadows will fall behind you.",
  source: "Walt Whitman",
},
{
  quote: "The journey of a thousand miles begins with one step.",
  source: "Lao Tzu",
},
{
  quote: "There is nothing permanent except change.",
  source: "Heraclitus",
},
{
  quote: "Learning never exhausts the mind.",
  source: "Leonardo da Vinci",
},

];

  /*
  the getRandomQuote function generates a random number from 0 to the # of quotes in the quotes array,
  stores a random quote pulled from the quotes array,
  then returns the pulled quote.
  */

  function getRandomQuote() {
    let randomNumber = Math.floor( Math.random() * quotes.length );
    let randomQuote = quotes[randomNumber];

    return randomQuote; 
  }

/*
  the below printQuote function calls the above getRandomQuote function in order to
  use a quote in an html string that will be shown in the browser.
*/

function printQuote() {
 let randomQuoteObject = getRandomQuote();
 let html =`
 <p class="quote">${randomQuoteObject.quote}</p>
 <p class="source">${randomQuoteObject.source}`

 /*
   the if statements will check to see if the quote's objects are returned as undefined or not.
   if not returned as undefined, the quote's objects will be displayed.
   if returned as undefined, nothing will be displayed for that object.
 */

 if ( typeof randomQuoteObject.citation !== "undefined" ) {
   html += `<span class="citation">${randomQuoteObject.citation}</span>`;
 };

 if ( typeof randomQuoteObject.year !== "undefined" ) {
  html += `<span class="year">${randomQuoteObject.year}</span>`;
};
 
if ( typeof randomQuoteObject.site !== "undefined" ) {
  html += `<span class="site">, <a href="https://www.starwars.com">${randomQuoteObject.site}</a></span>`;
};

html += `</P>`;  //this is the closing paragraph tag for the above html variable.

document.getElementById('quote-box').innerHTML = html; 
}

//the below randomBgColor function generates a random color,
//then uses it to display as a background color each time the page refreshes.

let red;
let green;
let blue;
let randomRGB;

function randomBgColor () {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
  document.querySelector('body').style.background = `${randomRGB}`;
}

/*
the below code is used to refresh the random quote and random background color
at intervals of every 5000 miliseconds (or 5 seconds).
this code snippet was found at https://www.encodedna.com/javascript/auto-refresh-page-every-10-second-using-javascript-setInterval-method.htm
*/

setInterval(randomBgColor, 5000);
setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/*
this code worked as expected when tested in the Google Chrome, Microsoft Edge, and Firefox web browsers.
this code did not work as expected when tested with Windows 10 Internet Explorer, OS build 19041.867   
*/