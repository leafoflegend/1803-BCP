const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

// functionLogger

// Write a function functionLogger that accepts a function to run and an argument to pass to that function. Your functionLogger should log the message "Function starting", run the function, log "Function complete", and return the result of the function call.

function squareNum(x) { return x*x }

function functionLogger (callback, argument) {
  console.log('Function Starting');
  var returnValue = callback(argument);
  console.log('Function Complete');

  return returnValue;
}

// var squareOfFour = functionLogger(squareNum, 4);
// Function starting
// Function complete

// console.log(squareOfFour)    // 16

// finderFunction

// If our finderFunction doesn't find a match it should return -1, just as the indexOf method does.
// findIndex
// Given a collection of stuff. Run a loop over it. Pass in each element to the callback. If the callback returns true, return the index. If nothing returns true, return -1.

var numbers = [1, 3, 5, 64, 7, 12];
var odds = [9, 13, 15, 17];

// function isEven(num) { return !(num % 2); };

function finderFunction (collection, callback) {
  for (var i = 0; i < collection.length; ++i) {
    var currentElement = collection[i];
    // console.log(currentElement);
    console.log(callback);
    // var result = callback(currentElement);

    // if (result) return i;
  }

  return -1;
}

// console.log(finderFunction(numbers, n => !(n % 2))) // 3
// console.log(finderFunction(odds, n => !(n % 2)))   // -1


// Times Tables
// Write a function that generates a "Times Tables" function for any number passed in. The function should accept a single parameter (a number) and return a function that itself returns the product of that number and any number passed in.

function timesTable (base) {
  return function (multiplier) {
    return base * multiplier;
  };
}

var ninesTable = timesTable(9);
/*
function (multiplier) {
    return 9 * multiplier;
};
*/
// console.log(ninesTable(8));   // => 72

var twelvesTable = timesTable(12);
/*
function (multiplier) {
    return 12 * multiplier;
};
*/
// console.log(twelvesTable(100));    // => 1200

// Biller Builder

// In New York, the final bill is calculated as the price of the item, plus a 3% shipping fee, plus a 9% sales tax assessed on the price of the item together with shipping costs.
// In New Jersey, the final bill is calculated as the price of an item, plus a 5% shipping fee, plus a 7% sales tax assessed on the price of the item together with shipping costs.
// So the final bill for a $100 item in New York would be: (100*1.03)*1.09 = 112.27 And in New Jersey: (100*1.05)*1.07 = 112.35

function biller (state) {
  function generateBiller (shippingTax, salesTax) {
    return function (amount) {
      return ((amount * shippingTax) * salesTax).toFixed(2);
    };
  }

  switch (state) {
  case 'NY':
    return generateBiller(1.03, 1.09);
  case 'NJ':
    return generateBiller(1.05, 1.07);
  default:
    return generateBiller(1, 1);
  }
}

var newYorkBiller = biller('NY');
// console.log(newYorkBiller(100))   // => 112.27

var newJersBiller = biller('NJ');
// console.log(newJersBiller(100))    // => 112.35

// Our partial function will accept functions that expect two arguments and return functions that expect one. The other argument will be defaulted to the value passed in as the second argument to our partial function.

var summer = function(a, b) { return a + b };

function partial (callback, argOne) {
  return function (argTwo) {
    return callback(argOne, argTwo);
  };
}

sumFive = partial(summer, 5);
// console.log(sumFive(10));    // => 15;

