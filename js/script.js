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
  site: `<a href="https://www.starwars.com">www.starwars.com</a>`
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
  quote: "I'm gonna make him an offer he can't refuse.",
  source: "Vito Corleone",
  citation: "The Godfather",
  year: "1972",
  site: `<a href="https://www.paramount.com/movies/godfather-collection">www.paramount.com</a>`
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

//the below randomBgColor function generates a random color,
//then uses it to display as a background color each time the page refreshes.

function randomBgColor () {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
  document.querySelector('body').style.background = `${randomRGB}`;
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
   if a value is returned, the quote's object will be displayed.
   if returned as undefined, it will not be displayed.
   finally, the randomBgColor function is called in order to refresh the background color when the quote is refreshed.
 */

 if ( randomQuoteObject.citation ) {
   html += `<span class="citation">${randomQuoteObject.citation}</span>`;
 };

 if ( randomQuoteObject.year ) {
  html += `<span class="year">${randomQuoteObject.year}</span>`;
};
 
if ( randomQuoteObject.site ) {
  html += `<span class="site">, ${randomQuoteObject.site}</span>`;
};

html += `</P>`;  //this is the closing paragraph tag for the above html variable.

document.getElementById('quote-box').innerHTML = html;

randomBgColor(); 
}

/*
the below code is used to refresh the random quote at intervals of every 5000 miliseconds (or 5 seconds).
this code snippet was found at https://www.encodedna.com/javascript/auto-refresh-page-every-10-second-using-javascript-setInterval-method.htm
*/

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