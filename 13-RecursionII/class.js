const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// We've thought of for loops and recursion as alternatives (even though we hate recursion) to each other.
// Last night we proved we could in fact use recursion to solve iterative problems.
// But, hopefully we learned a powerful lesson during fibonacci and gcd -> that for loops are really inefficent at some porblems.

// So Im oddly going to summarize the learning in one sentence:
// For loops are great at moving horizontally, Recursion is great at moving vertically.

// Sure, we can do shallow things using recursion. But it sucks.
var shallowArray = [1, 2, 3, 4, 5];
// We can do deep things using iteration, but it sucks.
// var deepArray = [
//   1,
//   [2, 3],
//   [4, 
//     [
//       4, 5,
//       {
//         6: 'hi',
//       }
//     ]
//   ]
// ];

var deepArray = [1, [2, 3]];
// -> 1, [2, 3], [4]
var anotherDeepArray = [1, [2, 3], [4]];

// function deepLogger (arr) {
//   for (var i = 0; i < arr.length; ++i) {
//     var currentElement = arr[i];

//     if (Array.isArray(currentElement)) {
//       deepLogger(currentElement);
//     } else {
//       console.log(currentElement);
//     }
//   }
// }

// function deepLogger (arr) {
//   if (!arr.length) return;
  
//   if (typeof arr[0] === 'number') console.log(arr[0])
//   else deepLogger(arr[0]);

//   deepLogger(arr.slice(1));
// }

// deepLogger(anotherDeepArray);

// If a problem can handle a flat structure, then it can endlessly handle a deep structure.

// Reverse String

var someString = 'eliot';

// I need to take one letter at a time, and move it to the beginning. Then, i repeat that process with the rest of the letters.

// Base Case: 'e'
// (e)
// e
// (el)
// l.concat(e) -> le
// (eli)
// i.concat(el) -> ile
// (elio)
// o.concat(eli) -> oile
// (eliot)
// t.concat(elio) -> toile

// I dont need to prove anything else. IF RECURSION WORKS ONCE, IT WORKS ALWAYS.
var aString = 'ab';

function reverseString (aStr) {
  if (aStr.length === 1) return aStr;

  var lastChar = aStr[aStr.length - 1];

  var restOfString = aStr.slice(0, -1);

  return lastChar.concat(reverseString(restOfString));
}

c(reverseString(aString));