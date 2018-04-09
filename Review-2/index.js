const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Problems for the day:
// anonymous functions - what are they? - just a value like any other value

// constructing for loops to be best fit for the problem.
// nested loops (someone mixed while and for loops)
// depth - and how to deal with it

// creating an object from an array that were given - reduction
// rest operator

// Anonymous Functions

const runAFunc = (callback) => {
  callback();
};

// runAFunc(() => { console.log('hi') });

// Functions are just objects

const logAnObj = (obj) => {
  console.log(obj);
}

// logAnObj({ name: 'eliot' });

// Data without reference

// IIFE

// (function () {
//   console.log('Im an iife');
// })()

// What is this thing above?
// It doesnt really ever exist
// Anonymous function

// Storing data is optional
'eliot'

3

{ name: 'hi' }

(function () {
  console.log('bye');
})

// For loops
// LTR -> Left to right - from the beginning of a collection to the end
// RTL -> right to left = from the end of a collection to the beginning
// Middling -> Start at both ends and work your way to the middle - isPalindrome - reverseArray

// Its less about the for loop then you would think. I think the base of this problem is that youve been trained to use a for loop for a very specific use case e.g.

// Thats most of your for loops
// for (var i = 0; i < length; ++i)

// We have to scrub the idea of for loops from our brain - and instead think about these problems as collection problems
// This is really a matter of you thinking about problems as 'how do i make a for loop do this' vs. 'what do i need to do to this collection'
// isPalindrome is about consuming a word
// reverseArray is about reordering an ordered collection

// for (var i = 0; i < 5; ++i) {
//   console.log('wtf');
// }

// for loops arent actually a real thing
// for loops are a structure that we developed to define how you think iteration in a structured way
// for loops arent the solution they are just a way to structure your solution into a sensible codebase

function forLoops (init, cond, incrementer, doThing) {
  var iterationValue = init;

  while (cond(iterationValue)) {
    doThing(iterationValue);
    iterationValue = incrementer(iterationValue);
  }
}

// forLoops(0, function (val) { return val < 5 }, function (val) { return val + 1 }, function (val) { console.log(val) });

// initilization
// condition
// update
// for loop body (why am i doing a for loop) - optional

// for loops are not a solution - they are just a way to structure your thoughts

// Depth - Nesting

var deepObj = {
  arr: [
    {
      anotherArr: [
        'hi mark'
      ]
    }
  ]
}

// we use for loops for objects structured one of two ways:
var anObj = { key: 'value', otherKey: 'otherValue' };
var flatArr = [1, 2, 3, 4, 5];
// iteration is for horizontal structures
// recursion is for vertical structures

// If I want to get to 'hi mark' I need to use an assortment of tools

// Wed use a for-in or object method to destructure each object
// and wed use our understanding of order in array structures and a for loop to take advantage of the order of array structures to deconstruct them

// You really dont traverse deep things iteratively
// Traditionally all deep diving of data structures is done recursively - were just torturing you

// function deepSearch (someObj) {  
//   if (Array.isArray(someObj)) {
//     for (var i = 0; i < someObj.length; ++i) {
//       var value = someObj[i];

//       if (Array.isArray(value) || typeof value === 'object') {
//         deepSearch(value);
//       } else {
//         console.log(value);
//       }
//     }
//   } else if (typeof someObj === 'object') {
//     for (var key in someObj) {
//       var value = someObj[key];

//       if (Array.isArray(value) || typeof value === 'object') {
//         deepSearch(value);
//       } else {
//         console.log(value);
//       }
//     }
//   } else {
//     console.log(someObj);
//   }
// }

// deepSearch(deepObj);

var twoDepthArray = [[1], [2], [3]];

// pseudo-deep meaning SET DEPTH
// (this doesnt really happen in real programming) - you dont ever know the object youre going to receive most of the time
// for (var i = 0; i < twoDepthArray.length; ++i) {
//   var innerArray = twoDepthArray[i];
//   // in the i for loop i only think about shallow stuff - the array i can grab (innerArray)

//   // I use a second for loop to deal with the inner arrays shallow stuff
//   for (var j = 0; j < innerArray.length; ++j) {
//     // j is dealing with the next shallow layer
//     var value = innerArray[j];

//     console.log('value: ', value);
//   }
// }

// The only way to sanely use for loops is to never think about depth with them. Only think about the current shallow layer
// THERE IS NO BUILT IN WAY IN JAVASCRIPT TO DEAL WITH DEPTH. Thats up to you.

// Reduction
// Or taking anything, and making it anything

// Reduction: When we take a structure and we 'reduce' it to another value.

// this is a simple form of reduction that you all have done
// 'Reducing string to vowels'
// Reducing a string to a sum
function countVowels (aStr) {
  var VOWELS = 'aeiouAEIOU';
  var sum = 0;

  for (var i = 0; i < aStr.length; ++i) {
    var curLetter = aStr[i];

    if (VOWELS.indexOf(curLetter) !== -1) {
      ++sum;
    }
  }
  
  return sum;
}

// c(countVowels('eliot'));

// frequencyAnalysis

// function frequencyAnalysis (arr) {
//   var obj = {};

//   for (var i = 0; i < arr.length; ++i) {
//     var curEl = arr[i];

//     if (obj[curEl]) ++obj[curEl];
//     else obj[curEl] = 1;
//   }

//   return obj;
// }

// const frequencyAnalysis = arr => arr.reduce((reducedValue, nextValue) => reducedValue[nextValue] 
//   ? { ...reducedValue, [nextValue]: reducedValue[nextValue] + 1 } 
//   : { ...reducedValue, [nextValue]: 1 } 
// , {});

// c(frequencyAnalysis(['a', 'b', 'a']));


// What the heck is ...?
// Rest/Spread Operator
// It takes ANY OBJECT and SPREADS its values out

// var objOne = {
//   one: true,
// };

// var objTwo = {
//   two: true,
// }

// var objThree = {
//   ...objOne, // { one: true } -> spread removes the container (thus spreading it) -> one: true
//   ...objTwo, // { two: true } -> spread removes the container (thus spreading it) -> two: true
//   three: true,
// }

// function someFunction (...args) {
//   var argumentsArr = Array.prototype.slice.call(arguments);
//   console.log(argumentsArr);
// }

// someFunction(true, false, 1, 3, 4, 5);

// c(objThree);

// This is all bonus content - but awesome bonus content.
// (because spreading breaks references - its equivelent to slice)

// Closure

// Closure is this concept about memory management -> it has to do with the fact that when we reference a value inside a function - we keep access to that reference forever

const createBankAccount = (name, initialValue) => {
  let bankValue = initialValue;

  return {
    info: () => {
      console.log(`${name}'s account currently has ${bankValue} dollars.`);
    },
    deposit: (amount) => {
      bankValue += amount;
      console.log(`${name}'s account currently has ${bankValue} dollars.`);
    },
    withdraw: (amount) => {
      if (bankValue - amount > 0) {
        bankValue -= amount;
        console.log(`${name}'s account currently has ${bankValue} dollars.`);
        return bankValue;        
      } else {
        console.log(`${name}'s account currently has ${bankValue} dollars which is not enough money to make a withdrawal for ${amount}`);
      }
    }
  }
}

const eliotsAccount = createBankAccount('Eliot', 100);
// eliotsAccount.deposit(1000);
// eliotsAccount.withdraw(50);
// eliotsAccount.info();

// What is bankValue?
// console.log(bankValue);
// console.log(eliotsAccount.bankValue);

// bankValue exists only in the scope of createBankAccount -> in scope, we learned that you cannot access a scope from outside of it,
// We abuse that when using closure - we make a reference to the scope WHEN WE DID HAVE ACCESS and then WE CONTINUE TO HAVE ACCESS FOREVER, EVEN AFTER RETURNING OUT OF THAT SCOPE.

// partial
// const partial = (callback, argOne) => {
//   return (argTwo) => {
//     return callback(argOne, argTwo);
//   }
// }

// // Partial here becomes: (b) => 1 + b

// const addOne = partial((a, b) => a + b, 1);
// c(addOne(1));
// c(addOne(10));
// c(addOne(20));
