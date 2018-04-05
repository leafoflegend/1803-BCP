const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Very Odd
// Write a function, veryOdd. The function accepts an array of numbers, allTheNums. It should return a new array that contains only the odd numbers from allTheNums. veryOdd must not mutate allTheNums.

var allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];

// ES5 - Nieve
// function veryOdd (arrOfNums) {
//   var oddsArr = [];

//   for (var i = 0; i < arrOfNums.length; ++i) {
//     var currentNum = arrOfNums[i];
//     // anyNum % 2 : 1 or 0 - 1 is truthy and odd, and 0 is falsy and even
//     if (currentNum % 2) oddsArr.push(currentNum);
//   }

//   return oddsArr;
// }

// ES6 - Fancy
// const veryOdd = anArr => anArr.filter(num => num % 2);
// ES5 - Fancy
// function veryOdd (anArr) {
//   return anArr.filter(function (num) {
//     return num % 2 === 1;
//   });
// }

// var oddNums = veryOdd(allTheNums);

// console.log('oddNums:', oddNums); // [1, 3, 5, 7];
// console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]

// Very Odd - Mutant Version!
// Write a function, veryOddMutant. The function accepts an array of numbers, allTheNums. The function should mutate allTheNums by replacing every even number in the array with the string 'normie'. veryOddMutant should return a count of the number of even numbers it replaced.

var allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];

function veryOddMutant (arrOfNums) {
  var count = 0;

  // This for loop is relying on the arrays length - you are modifying the arrays length in the for loop
  // That is a reallly dangerous anti pattern
  for (var i = 0; i < arrOfNums.length; ++i) {
    var currentNum = arrOfNums[i];

    if (currentNum % 2 === 0) {
      arrOfNums.splice(i, 1);
      ++count;
    }
  }

  return count;
}

// var countRemoved = veryOddMutant(allTheNums);

// console.log('allTheNums:', allTheNums);
// [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

// console.log('countRemoved:', countRemoved);
// 4

// Clone Machine

var dolly = ["Dolly", "sheep", []];

function cloneAnimal (anAnimal) {
  // Make clone name
  var cloneName = `${anAnimal[0]}Clone`;

  // Make new reference and cloneObj
  var cloneArr = [cloneName, anAnimal[1], []];

  // Push clone name into the original animal
  anAnimal[2].push(cloneName);

  // Return the clone
  return cloneArr;
}

var dollyClone = cloneAnimal(dolly);

// The clone is of same species, with new name and no offspring
// console.log(dollyClone)    // ["DollyClone", "sheep", []]

// The parent animal now has an offspring in its array
// console.log(dolly)    // ["Dolly", "sheep", ["DollyClone"]]

// My Splice
// Write a mySplice function that mirrors the behavior of JavaScript's .splice() array method. However, mySplice should accept the array to operate on as an argument, rather than being invoked as a method on that array.

// Try and mirror the behavior of .splice() as closely as possible, but to start with, assume all arguments will be positive integers. Most importantly, your function should have two observable effects: it should modify the array it receives as an argument and it should return an array containing the deleted elements.

// Do not use the native .splice() method in your own implementation.

// Splice is a three part operation
// We first have to move out everything before the startIdx into an array for later
// Then once we have the 0 index of the original reference as first element to delete, we start deleting (really storing those to return)
// REAL SPLICE: Insert the elements being asked
// Once we've removed all the deletions, we reinsert from the beginning, all the first elements we stored in step 1

var myArray = [1,2,3];

function mySplice (anArr, startIdx, deleteCount, ...elementsToInsert) {
  var upToDeleteArray = [];
  var deletedArray = [];

  for (var i = 0; i < startIdx; ++i) {
    upToDeleteArray.push(anArr.shift());
  }

  for (var i = 0; i < deleteCount; ++i) {
    deletedArray.push(anArr.shift());
  }

  while (elementsToInsert.length) {
    anArr.unshift(elementsToInsert.pop());
  }

  while (upToDeleteArray.length) {
    anArr.unshift(upToDeleteArray.pop())
  }

  return deletedArray;
}

// console.log("returned elements: ", mySplice(myArray, 1, 1, 'eliot'))    // [2]
// console.log(myArray)    // [1,3]

// Reverse Array
// Write a function that accepts an array and reverses that array in place. The behavior should mimic the behavior of the native .reverse() array method. However, your reverse function should accept the array to operate on as an argument, rather than being invoked as a method on that array.

// Do not use the native .reverse() method in your own implementation.

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Reversal as a process:
// Start at both ends simultaneously, and switch the elements on each end.
// Then move in 1 from each end, and repeat.
// This means, we only need to run for half the length of the array.
function reverse (anArr) {
  for (var i = 0; i < Math.floor(anArr.length / 2); ++i) {
    var rightPos = anArr.length - (i + 1);

    var leftElement = anArr[i];
    var rightElement = anArr[rightPos];

    anArr[i] = rightElement;
    anArr[rightPos] = leftElement;
  }
}

// reverse(myArray);
// console.log(myArray)    // [4, 3, 2, 1]

// Deeper Copy
// do a better copy then slice.

var arr = [1,[2,3, [4, 5, [8, 9, [10, 11, [Infinity]]]]]];

// function copy (deepArr) {
//   var copyArr = [];

//   for (var i = 0; i < deepArr.length; ++i) {
//     var currentElement = deepArr[i];

//     if (Array.isArray(currentElement)) {
//       // Were gonna have to deal with that deep array here
//       // Am I just rewriting the code above below?
//       var innerCopyArr = [];

//       for (var j = 0; j < currentElement.length; ++j) {
//         var currentInnerElement = currentElement[j];
//         // And now we make the bold assumption that this is always a primitive.
//         innerCopyArr.push(currentInnerElement);
//       }

//       // So we made a new reference array for the inner array, populated it with all primitives, so lets put this new array back in the top level array.
//       copyArr.push(innerCopyArr);
//     } else {
//       // This is a primitive (in this problem) - so we can just push it as there is no dangerous reference in primitives
//       copyArr.push(currentElement);
//     }
//   }

//   return copyArr;
// }

// ES5
// function copy (anArr) {
//   var copyArr = [];

//   for (var i = 0; i < anArr.length; ++i) {
//     var currentElement = anArr[i];

//     if (Array.isArray(currentElement)) {
//       copyArr.push(copy(currentElement));
//     } else {
//       copyArr.push(currentElement);
//     }
//   }

//   return copyArr;
// }

// ES6 - Complete Nonsense (What you would see in the solutions in codewars)
// Often these crazy shorthand answers are worse because they are so damn hard to read, readability is still very important even if you think your code is hot.
// const copy = anArr => anArr.map(elem => Array.isArray(elem) ? copy(elem) : elem);


// var arrCopy = copy(arr);

// arr[1].push(4);
// console.log(arrCopy)    // [1,[2,3]] Copy is not affected!