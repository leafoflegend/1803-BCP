const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

var someObj = {
  sayHello: function() {
    console.log('Hello!');
  },
};

// someObj.sayHello();

// A method is: any function attached to any object.
// Any built in functionality that comes with an object.

var methodedString = ('hi there mark').toUpperCase();
// c(methodedString);

// All primitives are IMMUTABLE.
// You cant say:
// 2 = 3;
// NOT ALLOWED IN JS.

// var anArray = [1, 2, 3, 4, 5];

// anArray[2] = 10;

// c(anArray);

// Arrays are in fact mutable.
// This means that we can damage or disturb the data inside of an array.
// This can lead to very strange errors if we are not careful about the ways in which we mutate data.
// In programming there are two schools of thought on this:
// Imperative Programming
// Functional Programming

// Take an array and return an array with each number doubled.

// Imperative Solution

// var anArray = [1, 2, 3, 4, 5];

// function doubleArray(anArr) {
//   // We made a whole new array to do this.
//   var nextArray = [];

//   for (var i = 0; i < anArr.length; ++i) {
//     nextArray.push(anArr[i] * 2);
//   }

//   return nextArray;
// }

// // This is in fact an appropriate answer.
// var doubledArray = doubleArray(anArray);
// c(doubledArray);

// c('The original array before the function is now: ', anArray);

// // Whats the caveat?

// // What if I know asked you to do the same, but triple the original array.
// function tripleArray(anArr) {
//   for (var i = 0; i < anArr.length; ++i) {
//     anArr[i] = anArr[i] * 3;
//   }

//   return anArr;
// }

// var tripledArray = tripleArray(anArray);
// c(tripledArray);

// The truth is that life is simpler when we dont damage or modify data. That was confusing right?
// That was imperative programming. We justify the means by the end.

// Functional Programming
// We are never allowed to modify data.

var anArray = [1, 2, 3, 4, 5];

function doubleArray (anArr) {
  var copyArray = anArr.slice();

  for (var i = 0; i < copyArray.length; ++i) {
    copyArray[i] = copyArray[i] * 2;
  }

  return copyArray;
}

var doubledArray = doubleArray(anArray);
// c(doubledArray);
// c('The original array: ', anArray);

// Slice creates copies of data, so that we dont alter other data.

// HERE IS MY ULTIMATUM:
// I dont care if you understand functional/imperative what I care about is that when we use methods - you understand the implication of the method you call. If it is damaging an array - YOU NEED TO KNOW THAT.
// Theres nothing worse then bugs that dont break your code, but instead just make your code return the wrong answer.

var someArray = ['hi', 'bye', 'hello', 'goodbye', 'hi again mark'];

// Find the position of 'goodbye'.

// var goodbyePosition = someArray.indexOf('goodbye', 4);
// c(goodbyePosition);

// indexOf returns the FIRST position of a matching element.
// It takes two arguments: the searchTerm, and the startIdx
// indexOf returns -1 if it does NOT FIND A MATCHING TERM.
// indexOf is not magic. Like all methods - YOU CAN WRITE IT YOURSELF!

function myIndexOf(anArr, searchTerm) {
  // Given an array and a thing to look for, begin looking through the array
  for (var i = 0; i < anArr.length; ++i) {
    // Grab every element in the array
    var currentTerm = anArr[i];

    // If the current element is the same value as the search term, return the index
    if (currentTerm === searchTerm) return i;
  }

  // If we never found something of the same value, return -1.
  return -1;
}

// c(myIndexOf(someArray, 'goodbye'));

// We can think of methods as things that are so common for programmers to write - that the guy/girl who wrote javascript decided to write it themselves and include it.
// It is super common to need to know if something is in an array.

// Slice
// Slice is a method provided by javascript to copy an entire array or portions of it.
// Slice takes a start index and end index.
// It will return a NEW ARRAY with the contents between those two indexes.
// If given no arguments, it will copy the entire array.
// A really cool feature of slice is that you can give it negative numbers to refer to a distance from the other end of the array.
// Slice is an enormously important tool for making copies of things so that we dont alter data that we dont mean too.
// This is going to come up again at the end of next week.

// c(someArray.slice(0, -1));

// How does one write a basic slice?

function mySlice(anArray, startIdx, endIdx) {
  // We need a new array - so lets make one.
  var slicedArray = [];

  if (!startIdx) startIdx = 0;
  if (!endIdx) endIdx = anArray.length;

  for (var i = startIdx; i < endIdx; ++i) {
    var currentElem = anArray[i];

    slicedArray.push(currentElem);
  }

  return slicedArray;
}

// c(mySlice(someArray, 0, 3));

// I am dispelling any thought you have that slice was written by a genius.
// You could write slice. It is simply meant to be something that makes your life more convenient.
// We leave these methods here because they are very commonly needed.
// YOU SHOULD ACQUINT YOURSELF WITH AS MANY METHODS AS POSSIBLE. THEY ENABLE YOU TO BE A LAZY HUMAN BEING WHICH IS A GOOD THING IN PROGRAMMING.

// Splice
// Splice is a MUTATIVE array method designed to enable us to both insert things into an array at various positions, and to delete elements from an array at various positions.
// Splice takes three arguments, startIdx, deleteCount, ...things you want to insert (this can be infinte)
// The return value is whatever it is you remove.

var arrayToSplice = ['ellen', 'danielle', 'alpa', 'jarret', 'elizabeth'];
var removedElements = arrayToSplice.splice(0, 0, {});
c('removed elements: ', removedElements);
c('original array: ', arrayToSplice);

// Splice is kind of a catch all if you become very good with it.
// You always need to be cautious about modification of an array, but with deep philosophical thought over your keyboard as you eat cheetos, you may arrive at the decision that it is worthwhile.
// Splice can take any kind of data, there is not a restriction to what you can pass in.
// Splice is really whatever your imagination decides it is.

// The 'Console'
// The console is something supplied by your environment.
// In repl, its an object some developer who works for repl added to that codebase.
// In here (in vscode) we have node running - so node is the console. (thats made by crazy smart people)
// In Chrome the console is made by Googles developers and I dont know if you guys knew this, but google kind of owns the internet and they happen to as a byproduct of that phenomenon write a shit ton of javascript. So those guys kind of needed a console more then repl, or node, or codepen, or whatever the heck you in your head think is great do.

// Chrome is the ultimate console should you need to have heavy duty console anything.

// console.anything is only as good as the developer logging the appropriate thing, and the environment running the console. You running console in repl.it is a sad act of desperation that will not take you far. This is part of the reason I really try to stick ya early with better tooling. That being said, its entirely fine for this course - but the second you start dealing with heavier debugging tasks - you want every tool available to you.
// Also - make sure to name your console.logs with descriptors like you saw me do many times today e,.g
// console.log('original array: ', array);
// If you can tell what it is you are logging it can be extrodinarily useful to you.

// for (var i = 0; i < 5; ++i) {
//   var rand = Math.random() * 1000;

//   console.log(i, rand);
// }

// The truth about becoming an expert debugger: pain
// Thats it.
