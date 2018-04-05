const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

function something () {
  console.log('hi');
}

// something();

something.title = 'Eliot';

// console.log(something.title);

// Functions are what we call callable objects - it means one thing, that we can assign a property called invoke, and it has an understanding that () means to call it.

// 1. Be passed as an argument into another function
// I DID NOT INVOKE aFunc when I passed it as an argument.
function callAFunction (aFunc) {
  // aFunc gets passed in as an object, then we invoke it later.
  aFunc();
}

// callAFunction(something);

// 2. Be returned from another function
function createCounter () {
  var counter = 0;

  // Anonymous Function
  return function () {
    ++counter;
    console.log('counter: ', counter);
    return counter;
  };
}

// Closure - Closure allows us to escape the normal rules of scope.
// It does so through some very strange dynamics of javascript and how javascript goes about a process called 'garbage collection'.
// Your computer wants to free up any memory that isnt being used anymore. Javascript doesnt make you manage this - its automatic, but it has one and only one rule to how it works: If a variable/function is never going to be referenced again, Javascript throws it away.
var counterOne = createCounter();
var counterTwo = createCounter();
// Were not using createCounter again - we will use the function it returned.
// If we return a function from another function - and the function we returned is using data inside its parent function - javascript 'closes over' the entire scope of the function. It traps it - in a weird eternity that cannot be deleted.
// So, we might think that inside of counterOne looks like:

/*
{
  var counter = 0;
  counterOne: () {
    ++counter;
    console.log('counter: ', counter);
    return counter;
  }
}
*/

// counterTwo();
// counterTwo();
// counterTwo();
// Now, we can modify that value - only through the behaviors defined by the function.
// Can I subtract something from counter?
// Closure is extremely powerful, when used right. It is also a expert tool that you will not be tested on in admissions, and probably only see a really annoying problem tonight on it.
// Kyle Simpson - who wrote You Dont Know JS - has a WHOLE BOOK dedicated to how closure works, why it happens, and why you need to learn it.

// counterOne();
// counterOne();
// counterOne();

// 3. Be held in any data structure

function addTwoNums (a, b) {
  return a + b;
}

function multiplyByTwo (a) {
  return a * 2;
}

function addString (a) {
  return `${a} + Im now a string!`;
}

function makeScreaming (a) {
  return a.toUpperCase() + '!!!!';
}

var arrayOfFuncs = [addTwoNums, multiplyByTwo, addString, makeScreaming];

function callAllFuncs (a, b) {
  var val = null;

  // Add 1, and 1 with the first function
  if (!val) val = arrayOfFuncs[0](a, b);

  // Loop through the rest of the functions
  for (var i = 1; i < arrayOfFuncs.length; ++i) {
    // Call the current function on whatever value is left from the last function
    var currentFunc = arrayOfFuncs[i];

    val = currentFunc(val);
    // Take the result of 1 + 1 and the first loop multiply by 2 === 4
    // Then on the second loop we say - add ' + Im now a string' to 4.
  }

  return val;
}

// c(callAllFuncs(1, 1));


// Callback Functions
// Why are they called that?
// Well, when you call a friend and they dont answer - do you know when theyre going to call you back?
// You might have some reasonable guesses
// How do we deal with uncertainity?

// setInterval(function () {
//   console.log('A second has passed!');
// }, 1000);

// How else would you describe to Javascript how to do something later? Do you guys know any way to do that right now
// onclick takes a function
// i would give something a function to run in a minute

// Why?

// Because how else can we possibly describe WHAT SHOULD BE DONE LATER?
// The only tool in programming to describe a sequence of actions in a composable way, is in fact a function. This isnt javascript - this is all languages.

// We call it a callback, because, were asking the computer to call us back later.

function getBankAccount () {
  var money = 1000;

  return {
    viewMoney: function () {
      console.log('Money: ', money);
    },
    withdrawMoney: function (amount) {
      money -= amount;
      console.log('Money now: ', money);
    },
  };
}


var myBank = getBankAccount();

money = 1000000;

var realMoney = myBank.viewMoney();

realMoney = 3000000;

myBank.viewMoney();