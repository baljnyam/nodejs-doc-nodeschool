// var myNumber = 1;
// function addOne() {
//   myNumber++;
// } // define the function
// addOne();
// console.log(myNumber); // log out 2

// var fs = require("fs");
// var myNumber = undefined;

// function addOne() {
//   fs.readFile("number.txt", function doneReading(err, fileContents) {
//     myNumber = parseInt(fileContents);
//     myNumber++;
//   });
// }

// addOne();

// console.log(myNumber);

// var fs = require("fs");
// var myNumber = undefined;

// function addOne(callback) {
//   fs.readFile("number.txt", function doneReading(err, fileContents) {
//     myNumber = parseInt(fileContents);
//     myNumber++;
//     callback;
//   });
// }

// function logMyNumber() {
//   console.log(myNumber);
// }

// addOne(logMyNumber);

//Not linear thinking, functions will run exact same time

// var fs = require("fs");
// fs.readFile("movie.mp4", finishedReading);

// function finishedReading(error, movieData) {
//   if (error) return console.error(error);
//   //do something with mdata
// }

// var fs = require("fs");

// function finishedReading(error, movieData) {
//   if (error) return console.error(error);
//   // do something with the movieData
// }

// fs.readFile("movie.mp4", finishedReading);

// OR

var fs = require("fs");

fs.readFile("movie.mp4", function finishedReading(error, movieData) {
  if (error) return console.error(error);
  // do something with the movieData
});
