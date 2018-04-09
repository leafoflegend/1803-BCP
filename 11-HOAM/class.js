const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

var someArray = [1, 2, 3, 4, 5];

// Hey can you guys sum this array

// We know about a specific reference to an array in this case anArray
// function sumArray (anArray) {
//   var sum = 0;

//   // We know we need to loop over every element in the array
//   for (var i = 0; i < anArray.length; ++i) {
//     // and we know we need to do SOMETHING with that element
//     var currentElem = anArray[i];

//     sum += currentElem;
//   }

//   // Most of the time, were gonna wanna return something
//   return sum;
// }

// The fact that this is absurdly common in programming has lead to every programming language introducing pre-built tooling to deal with this problem.
// Any 'tool' given to us by the developers of a language is likely a method on its object.
// so Arrays have methods, e.g. Array.slice() -> which we already use
// But what about when we want to do the above? Or some variation of it?
// Its really hard to define all the possible customizations of this pattern that a developer might want, so instead of trying to make a cure all for arrays in general, why dont we offer a few ways to iterate over arrays, and leave the SOMETHING you do to each element up to you.
// The best and only way to describe how we want code to behave later - is with callbacks. Welcome to HOAM.

// function myForLoopArraysEdition (anArray, callback) {
//   for (var i = 0; i < anArray.length; ++i) {
//     var currentElement = anArray[i];

//     callback(currentElement, i, anArray);
//   }
// }

// function sumArray (anArray) {
//   var sum = 0;

//   myForLoopArraysEdition(anArray, function (num, idx, array) {
//     console.log('Elem: ', num);
//     console.log('Idx: ', idx);
//     console.log('Original Array: ', array);
//     sum += num;
//   });

//   return sum;
// } 

// c(sumArray(someArray));

// var sum = 0;

// someArray.forEach(function (elem, i, array) {
//   sum += elem;
// });

// console.log(sum);

// function logArray (anArray) {
//   anArray.forEach(function (elem) {
//     console.log(elem);
//   });
// }

// logArray(someArray);

// For Each is very powerful, but also cant handle complex tasks - it does one thing - loop over stuff. It is NOT very good at returning anything useful (in fact, it returns undefined)

// Map: Map has another simple job -> given an array, loop over the array and AFTER BEING GIVEN THE CHANCE TO INSPECT EACH ELEMENT, return A VALUE TO REPLACE THAT ELEMENT IN A NEW ARRAY. That new array will be returned.

// function doubleArray (anArray) {
//   return anArray.map(function (elem) {
//     return elem * 2;
//   })
// }

// const doubleArray = arr => arr.map(num => num * 2);

// c(doubleArray(someArray));

// function ourMap (anArray, callback) {
//   var newArray = [];

//   for (var i = 0; i < anArray.length; ++i) {
//     var currentElement = anArray[i];

//     var callbackResponse = callback(currentElement, i, anArray);

//     newArray.push(callbackResponse);
//   }

//   return newArray;
// }

// c(ourMap(someArray, function (num) {
//   return num * 2;
// }));

// Filter
// Filter: filters down an array to a array of elements that pass the provided test. WHAT TEST? YOU SAY. Well, whatever test your callback runs on them. If your callback returns true - that element makes it into the next filtered array, if your callback returns false - that elements is not in the next filtered array.

// var oddsArray = someArray.filter(function (elem) {
//   return elem % 2 === 1;
// })

// c(oddsArray);

// function filterAnArray (anArray, callback) {
//   var filteredArray = [];

//   for (var i = 0; i < anArray.length; ++i) {
//     var currentElement = anArray[i];

//     var callbackResponse = callback(currentElement, i, anArray);

//     if (callbackResponse) filteredArray.push(currentElement);
//   }

//   return filteredArray;
// }

// c(filterAnArray(someArray, function (num) {
//   return num % 2 === 1;
// }));

// Reduce
// Reduction: Reduction is a computer science term to refer to the practice of taking some collection and 'reducing' it into a value. What can be trippy about that definition is that the value we reduce a collection to: can be another collection.
// The best way to think of reduce is as the perfect implementation of 'sum an array'

// Reduce is the pattern by which we say:
/*
func
  var something
  loop
    build something bigger or smaller
  end loop
  return something
end func
*/

// reduce, even in the pseudo code above, has something that we dont get in the other HOAM. var something
// var something can be thought of as an accumulator - or as the reduced value - whichever makes more sense in your head.
/*
Args:
0: Reduced value
1: next element in array
2: index
3: array reference

Return value:
Whatever you return in each iteration of reduce, becomes the new reduced value for the next iteration.
*/

// reduce(cb, initialValue);

function sumArr (sum, nextElem) {
  // 1st iteration
  // sum = 0
  // nextElem = 1
  // return 0 + 1 === 1
  // 2nd iteration
  // sum = 1 (from the last return)
  // nextElem = 2;
  // 1 + 2 === 3
  // 3rd iteration
  // sum = 3
  // nextElem = 3
  // 3 + 3 === 6
  // 4th iteration
  // sum = 6
  // nextElem = 4
  // 6 + 4 === 10
  // final iteration
  // sum = 10
  // nextElem = 5
  // 10 + 5 === 15
  // return 15 to top
  return sum + nextElem;
}

// var sum = someArray.reduce(sumArr, 0);

// c(sum);

// Every single one of these HOAM is something beautiful and special to programmers for a reason you may not realize:

// Theyre all Purely Functional.

// Functional Programming as a reminder is when programming functions act more like Math functions - we are given input and we return output that does not affect the value of the input. We also say - given a we always return b. Each and every higher order array method returns a new array (or forEach, undefined) - that DOES NOT IMPACT THE ORIGINAL ARRAYS VALUE. FP - is WAY beyond you - but its realllllly cool to start thinking about the value of keeping our data immutable - and wanting every single function to return the same output given the same input. That is the essence of functional programming.

const notThatOriginalThing = someArray
  .map(num => num * 5)
  .filter(num => num <= 20)
  .reduce((str, num) => str + num.toString(), '')
  .split('')
  .join('$');

console.log(notThatOriginalThing);