const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);


var someObj = {
  name: 'Object One',
  size: 5,
};

// When we reference 'name' of someObj - we want that change to be permnant. Another way to think about that is: when we change a reference, we want all future observers of that reference to see the change.
someObj.name = 'Object Two';

// console.log(someObj);

// It seems like were changing someObj's properties to a different thing.

// A Grid

// var row = [1, 2, 3, 4, 5];

// var grid = [];

// for (var i = 0; i < 3; ++i) {
//   // Code below
//   grid.push(row);
// }

// // I want to change a cell in the 'row' - I want all future observers of row to see this change.
// row[2] = 'Tricky';

// Where is the row inside the grid?
// Its everywhere. Theres three different things looking at the row.
// console.log(grid);

// What is going on 'under the hood'?

var aNum = 5;

// console.log(aNum);

aNum = 3;

// console.log(aNum);

// What really are variables?
// Variables are actually best thought of as a question: "I want memory, and i want it to be named 'x' in all future code."
// In the above example we say 'i need memory, and im going to REFER to it by aNum'.

// In the example of primitives - this is a really simple operation for the following reason.

// Memory address (for those that dont know) look like 0x100000

// aNum = 0x100000 = 5;

// aNum = 3;
// Computer did: 0x100000 = 3;

// Give me aNum
// Computer went to 0x100000 found 3 gave us 3, called it a day.
// aNum IS NOT 3. IT IS A POINTER TO A MEMORY ADDRESS THAT IS 3.

// Things get mightily more complicated when we introduce objects.

var anArray = [1];

// I say: I need anArray
// Computer says: anArray is now 0x100001
// I say: anArray is []
// Computer says: 0x100001 is now pointing at an object - which can take up as much memory as it desires - so why dont i go get more memory.
// Computer does 0x100001 -> 0x100002 (our Array)
// I say: anArray[0] is equal to 1
// Computer says ok so youre saying: 0x100001 which points to an array at 0x100002 is pointing to 0x100003 (position 0) which is -> 1
// anArray => 0x100001 => 0x100002 => [0x100003 => 1,]

// The big question right?

var anotherArray = anArray;
//             the var     the arr       the indexes
// anArray => 0x100001 => 0x100002 => [0x100003 => 1,]
// anotherArray => 0x100004 => 0x100002 => [0x100003 => 1,]

anotherArray[1] = 'Tricky Part 2';

// console.log(anArray);
// anArray = 'nothing';
// console.log(anotherArray);
// anArray has nothing to do at all with the actual data of the array. Its just an address for the data that is the array.

// Variables are just addresses. They never actually represent any real value.

// This isnt a Javascript thing. This is computer science 101.
// You have peoples phone numbers in your phone.
// The actual phone number takes up space.
// The phone number DOES not actually represent your friend or any data.
// Where that phone number goes (calls) may change tomorrow.

// How do we avoid referencing the same object in multiple places by accident?
// We simply avoid ever using the same object twice. We make entirely new references.

var row = [1, 2, ['eliot'], 4, 5];

var grid = [];

// this is .slice
// It makes a SHALLOW copy
function newReferenceArray(anArr) {
  // Lets make an entirely new reference (e.g. memory)
  var newRef = [];

  for (var i = 0; i < anArr.length; ++i) {
    var currentElem = anArr[i];
    // Importantly, this assumes that each element in the array is NOT ANOTHER REFERENCE.
    // As long as the value is primitive, we are in the clear.
    newRef.push(currentElem);
  }

  return newRef;
}

for (var i = 0; i < 3; ++i) {
  grid.push(newReferenceArray(row));
}
// Deep copys is very very tough.
row[2].push('Jarret');
console.log(grid);




