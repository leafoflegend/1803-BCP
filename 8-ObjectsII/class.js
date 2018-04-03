const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Arrays we know every single 'key' because keys are numbers ranging from 0 -> n (where n is the size of the array).
// Objects, we know of no such pattern - all we know is that there MAY be keys, and they can be anything from a-z0-9!->
// How do we KNOW whether a key is in an object or not?

// 'in' operator

var someObj = {
  ellen: 'hatleberg',
};

// Pretend for a moment we cannot visually see inside of this object.

// c('elln' in someObj);

// .hasOwnProperty -> one of very few methods on ALL objects
// This is longhand - like pretty long to write - 'in' is probably preferrable due to the lazy man/womans theorem
// c(someObj.hasOwnProperty('ellen'));

// This all seems useless. Id probably say you're right.
// I would say that this is superior for this use case for a non-obvious reason: It is a similar pattern to how youre writing code already
// Any new structure in your syntax - is going to make coding harder.
// Its like everytime i introduce you to a new crazy concept: its hard for you to integrate it into your style of writing code
// if (someObj['ellen']) {
//   console.log('true');
// } else {
//   console.log('false');
// }

// Thats not why 'in' is important.

var classRoom = {
  'alpa': 0,
  'tatiana': 1,
  'ellen': 2,
  'danielle': 3,
  'elizabeth': 4,
  'jarret': 5,
};

// c(classRoom);

// c('alpa' in classRoom);

// Iterable - Anything that can be iterated over. Sometimes in sensible ways, other times in entirely unsensible ways
// Objects are iterables, and what in allows us to do is access the iterable.
// Anything thats an iterable can be used in a for loop.

// console.log('{');
// for (var student in classRoom) {
//   var value = classRoom[student];
//   if (typeof value === 'object') {
//     console.log(`  ${student}: {`);
//     for (var innerKey in value) {
//       console.log(`    ${innerKey}: ${value[innerKey]}`);
//     }
//     console.log('  }');
//   } else {
//     console.log(`  ${student}: ${value},`);    
//   }
// }
// console.log('}');

// Alternatives to for in
// For In loops are the de facto thing any educator would teach you because: they work in most languages
// For In loops are perfectly fine to use, if you after that segment of the lecture are like, yay i love this (im kidding) but if you feel confident, thats enough
// There is a way to finnagle a object into an array, so if you feel comfortorable with arrays, you may prefer these other ways

// Object.keys
// Object.keys takes an object and returns an array of its keys.

// var classRoomKeys = Object.keys(classRoom);
// c(classRoomKeys);

// for (var i = 0; i < classRoomKeys.length; ++i) {
//   var key = classRoomKeys[i];
//   var value = classRoom[key];

//   console.log('key: ', key);
//   console.log('value: ', value);
// }

// Object.values
// Object.values takes an object and returns an array of its values. Notably: There is no way to determine what key that value is at

// var classRoomValues = Object.values(classRoom);
// console.log(classRoomValues);

// Object.entries
// Object.entries takes an object and returns an array of key:value pairs - these key value pairs will be represented as an array [key, value]

// var classRoomEntries = Object.entries(classRoom);
// console.log(classRoomEntries);

// for (var i = 0; i < classRoomEntries.length; ++i) {
//   // var [key, value] = classRoomEntries[i];
//   var key = classRoomEntries[i][0];
//   var value = classRoomEntries[i][1];
//   console.log('key: ', key, 'value: ', value);
// }

// var someArray = [1, 2, 3, 4, 5];
// delete someArray[1];

// console.log(someArray);
// console.log(someArray.length);

// Arrays try to promise you order.
// But theres a second part of the promise youve never seen broken: You are supposed to use array methods.

