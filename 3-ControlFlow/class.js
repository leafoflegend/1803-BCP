const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// For Loop Demonstration

// For loops are ALWAYS made of the same three things in every language.
// Initilization - Where does this repeatable sequence of code begin? : var i = 0;
// Condition - When does this repeatable sequence end? : i < 5;
// Update - How do I get closer to the condition being unmet? : ++i

// You cannot write a for loop in any language without these three things.
// Most of the time the update will somehow move us across the size and/or length of a collection (array, string, object)
// Sometimes it may be even more complex - like needing a random number or user input.
// Updating is by far the hard one to use.
// for (var i = 0; i < 5; ++i) {
//   console.log(i);
// }

// A lot of the time we write for loops like above ^
// But we can fill each of the three parts of a for loop with anything in the world

function forLoopIsDone () {
  var randomNumber = Math.ceil(Math.random() * 100);

  return randomNumber < 90;
}

// for (undefined; forLoopIsDone(); undefined) {
//   console.log('this is terrifying');
// }

// console.log('Done!');

// For loops dont really do anything
// Best practices
// YOU WITHOUT KNOWING IT are using best practices
// The use of for loops being structured like:
// for (var i = 0; i < 5; ++i)
// We as humans prefer determinism - eg we know when this ends
// is entirely the culmination of the entire internet agreeing there is a smart way to put these things together. a for loop is really just a container for our minds to structure the hard problem:
// How do I repeat code in a safe and sensible way?
// hint: not like i did above

// We learned:
// Initialization: It should be something sensible - most of the time 0. Or the beginning of a collection.
// Condition: It should be deterministic - there should be 0% chance we will never reach it. This condition always needs to fail eventually.
// Update: We learned from update that it is best to have the update FORCE us to write conditions that we HAVE TO FAIL ON EVENTUALLY.

// while loops

// Initializing
// var i = 0;

// // Condition
// while (i < 5) {
//   console.log(i);
//   // Update
//   ++i;
// };

// Recursion: Also has these three things - you cannot avoid it.
// The reason im beating this in - is you should become a master at identifying what those three things are in any loop you write.

// console.log('Done!');

// You can solve anything that a for loop can do with a while loop.
// PERIOD.

// Weirdly, there is ONE functionality that a while loop can do, that a for loop CANNOT.
// do while

// Do while promises one thing: It will always DO the THING atleast once.

// do {
//   console.log('Hi!');
// } while (false);

// Amature DRYness - You've simplified a long operation, but have you made it configurable?
// for (var i = 0; i <= 50; i += 5) {
//   console.log(i);
// }

// Journeyman/woman DRYness
// function log5ToNum (maxNum) {
//   for (var i = 0; i <= maxNum; i += 5) {
//     console.log(i);
//   }
// }

// Master DRYness
// function logThing (start, end, multiple) {
//   for (var i = start; i <= end; i += multiple) {
//     console.log(i);
//   }
// }

// logThing(50, 200, 3);


// Log Strings Characters

function logString (aStr) {
  // The pattern of looping through an array/string and grabbing every character in a left->right manner in the collection is THE MOST COMMON PATTERN IN CODE PERIOD.
  for (var i = 0; i < aStr.length; ++i) {
    var currentChar = aStr[i];

    // What do i do with this thing?
    console.log(currentChar);
  }
};

// logString('o hi mark');

// Post Incrementor: It increments a number after every single other operation on that line has completed.
// The operation on that line is to return. So returning happens first, then incrementing never happens.
// function addOne (aNum) {
//   return aNum++;
// }

// I use a Pre Incrementor because i like my code to make sense and do the things i tell it to do.
// A Pre Incrementor will add one before everything else on the line takes place.
// Theyre both shortcuts and shortcuts bite us in the butt sometimes.
// return ++aNum // => works
// c(addOne(2));

// Im going to dispel any notion you have of ever using anything except return

// Break
// Break is a magic word you can say inside of a loop to express that you would like the loop to end. (immediately)
// for (var i = 0; i < 10; ++i) {
//   if (i > 5) break;
//   console.log(i);
// }

// Break is useless because for loops already define their end as part of their construction.
// We should use a for loops condition for determining when it ends - if we use anything else we are doing something very strange and performing whats called an 'anti-pattern'. I say that because for loops have defined a pattern for us to follow, and we are essentially saying 'screw that'
// Edge Case: Sometimes we may want to exit a loop to BRING DATA out of the loop - 'return'

// Continue
// Continue is a magic word you can say inside of a loop to express that you would like to skip this iteration of the loop.
// for (var i = 0; i < 10; i += 2) {
//   console.log(i);
// }

// Continue is another anti-pattern
// If you are looping over unneccessary stuff - then why are you looping over that stuff?
// Update is configurable - if you really have a situation like this, then you should rethink the way your for loop is updating. If you want every other one - increment by 2 in the update, and if you wanted odds - start it at 1 and update by 2.
// Lastly, both of these are far inferior to the true hero of javascript

// Return
// Return is a magical magical word that allows us the javascript developers to define two very key functionalities to return
// 1. The end of a function - nothing happens after we say return in a function. That is the death of that function.
// 2. We can return data out of the scope of one function into the scope of any other function/place.
// 3. Return also forces us to follow DRY practices quite a bit more. If we want to use return, we have to write loops as functions - that means that we have made all of our code repeatable, and configurable - the two key things about good DRY code.

// Question: Total up my shopping carts

// var carts = [
//   {
//     name: 'cart1',
//     amounts: [1, 5, 7, 8, 10, 25],
//   },
//   {
//     name: 'cart2',
//     amounts: [8, 14, 2, 9],
//   },
// ];

// function totalShoppingCarts (carts) {
//   var sum = 0;

//   function totalCart (aCart, maxNumOfItems) {
//     var cartTotal = 0;

//     for (var i = 0; i < aCart.amounts.length; ++i) {
//       var currentAmount = aCart.amounts[i];

//       cartTotal += currentAmount;

//       if (i >= maxNumOfItems) return cartTotal;
//     }

//     return cartTotal;
//   }

//   for (var i = 0; i < carts.length; ++i) {
//     var currentCart = carts[i];

//     sum += totalCart(currentCart, 3);
//   }

//   return sum;
// }

// c(totalShoppingCarts(carts));

// var thing1 = undefined;
// var thing2 = false;

// var finalThing = thing2 || thing1;

// // Gating
// c(finalThing); // => 'eliot'

// Enabling some seriously weird shorthand code for very lazy people.

// Functions
// Three styles of function are currently in JS:

// Function Declaration:
// Declaration
// Parameters (when invoked, arguments)
function imAFunction (param1, param2) {
  // Body
  console.log('This is the function body.');
}

// Function delclarations are particuraly weird - they have some special abilities were going to go over tomorrow, but even looking at them - they kind of break the normal paradigm of how we look at and interact with objects.

// Normal object declaration
var someObj = {};

// The strange thing with function declarations is that there is NO ASSIGNMENT.
// e.g. where tf is the '=' symbol?

// Function expression

var imAnotherFunction = function (param1, param2) {
  console.log('Im the function body');
}

// imAnotherFunction();

// Importantly, function expressions and function declarations differ in a dramatic way that we are going to discuss at length tomorrow:

// Heres a trippy example:

// Hoisting
// The ability to call a function BEFORE ITS DEFINITION.
// functionDeclaration();
// functionExpression();

// function functionDeclaration () {
//   c('Im the declaration!');
// }

// var functionExpression = function () { c('Im the expression!'); };

// ES6 Functions

const es6Function = () => {
  c('Im ES6!');
};

const formOne = (param1, param2) => {
  c('Body!');
};

const formTwo = param1 => {
  c('Notice I have no parens around my argument, thats because, theres only one argument');
};

const formThree = param1 => param1 + '  This one is very crazy looking right? This is called an implicit return, that means whatever i put after the arrow BUT not surrounded by { curly bois means that it will be returned immediately without me having to use the word return.';

// c(formThree('Eliot says: '));
// Form 2, and Form 3 are shorthand and provide no additional functionality, but are very sexy.

// es6Function();

// I think you all should try to stop writing ES5 functions. And move over to ES6 as quickly and as soon as humanely possible. It is the end days of ES5, dont teach yourself something everyone else is trying to move on from.

// ES6 functions also have some abilities and differences with ES5 functions, that are very very very useful and important but are very hard to talk about right now - the simple simple version of why theyre so cool has to do with a magic word you may have seen before called: 'this'

// This, is terrifying. ES6 functions try to solve the many problems that this introduced to javascript.

// Bonus: Es6 is sooooooooooo hot right now.

// Parameters dont exist episode 1:
// Parameters are just a way for us to name the indexes of the arguments.
function whatEvenIsAParam () {
  // Old hack - TLDR: arguments is not an array its a really weird object from the 90's, im coercing it into an array below
  var ourArgs = Array.prototype.slice.call(arguments);

  for (var i = 0; i < ourArgs.length; ++i) {
    var currentArg = ourArgs[i];

    c(currentArg);
  }
}

whatEvenIsAParam(5, 10, {}, [], 546, 'eliot', 'cool');