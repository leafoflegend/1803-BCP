const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);


// Problem Statement: How do we access data that we stored previously?

// Variables
var place = 'thing';

/* var place is where i want it */
/* initializing a value as 'thing' */

// Variables are composed of two pieces: Where and What.
// In software, the 'where' is something we assign with a name.
// The what can be a whole lot more complicated, but its anything that resides at that name.

// You've solved for this problem entirely with variables up to now...
// With one notable exception: Arrays
// Arrays are objects that store data in an ordered fashion.
// Two key words: Object, and Order

// Objects are just unordered arrays? What does that even mean?

var ourFirstObject = {
  Jarret: 'Rose',
};

// We still use a variable to store the location of the object as a whole.
// We have two sides to it, instead of 1, as were accustomed to with arrays.
// The left side is the 'key' in this case 'Jarret'
// The right side is the 'value' in this case 'Rose'
// A key: value pair is called so appropriately because we can think of these two things as being connected: Jarret: 'Rose'
// Alpa said 'keys can be considered a variable' - Sub Variable

// console.log(ourFirstObject);

// Objects are only as powerful as what you design them to do
// Why do you love arrays so much?

var ourFirstArray = {
  0: 'hi',
  1: 'bye',
  2: 'hello again',
  3: 'bye again',
  4: 'o hi mark',
  slice: function() {
    console.log('slice running');
    return true;
  },
};

// Is this exactly what an array would do?
// Arrays are really just objects with one promise made to the user:
// 'I promise I will name the keys a number in a sequential order'
// What about .slice or any methods?
// We can continue to add keys to this thing.
// console.log(ourFirstArray.slice());

// What do Objects do for us thats better then an array? I love arrays.
// Youre not leaving arrays behind, but you do need to understand the use case for a 'vanilla' object versus an array.
// POJO - Plain ol javascript object

// Given some small set of data (a key) how can we always access the desired value
// We are abusing the dictionary pattern in the below code
// var anArray = [1, 2, 3];

// for (var i = 0; i < anArray.length; ++i) {
//   // We know that arrays are ordered.
//   // So we know we can start at 0 and go to the end of the array, and use the current number as a 'key'
//   // a secret message that gets us value back from the array
//   console.log(anArray[i]);
// }

// var someObj = {
//   '{}function()': 'scary eh',
// }

// var ourKey = '{}function()';

// c(someObj[ourKey]);

// Why are Dictionarys so important?
// How do you think logging into a website works?
// username/password

// indexOf on an array
// Its not that this is a bad idea, its just that i think theres better ideas
// Performance
// - The worst case scnario is that the username and password are the newest user - so our for loop would have to run to Array.length
// - What if this was facebook? How many iterations is that?
// Big O - Big O is a CompSci term to talk about performance as a matter of time as units.
// So for this problem wed say it was O(n) - where n is equal to number of users.
// Extensibility
// - What if someone deleted their account?
// - Wed have to rebuild both arrays in their entirety
// var passwords = [];
// var usernames = [];

// if (usernames.indexOf(user) !== -1) {
//   // blah
// }

// check if its in an object

// What is the worst case scenario to find out a user in our database on logIn or signUp?
// O(1)
var userDatabase = {};


function signUp(username, password) {
  var hashedUsername = hashingAlgorithm(username);
  var hashedPassword = hashingAlgorithm(password);
  // Check if the username is already in our database
  if (userDatabase[hashedUsername]) {
    console.log('Username already taken!');
  } else {
    console.log('Username not taken!');
    userDatabase[hashedUsername] = hashedPassword;
    console.log(userDatabase);
  }
}

function logIn(username, password) {
  var hashedUsername = hashingAlgorithm(username);
  var hashedPassword = hashingAlgorithm(password);

  if (userDatabase[hashedUsername]) {
    if (userDatabase[hashedUsername] === hashedPassword) {
      console.log('Success! Youre logged in!');
    } else {
      console.log('Wrong password.');
    }
  } else {
    console.log(`User ${username} does not exist.`);
  }
}

// This pattern here - is a true dictionary. There is no need to loop at all. Every operation tries to do one very specific thing - and it either succeeds or fails. There is no inbetween. If you got the key wrong, you will never ever be able to access it.
// O(1) because it is an atomic operation - that means it always ends in SUCCESS/FAILURE
// Where did we earn that savings in time?
// Because we didnt rely on the computer. We relied on ourselves. This is human trickery.
// Weve offloaded performance onto the human brain.

// This is actually all databases do.
// This scary simple database implementation was how equifax got hacked.
// This was actually essentially all theirs did.

// logIn('user', 'pass');
// logIn('Eli', 'wrong');
// logIn('user', 'password');

// This doesnt seem very secure - and how might we scale this system?

// Hashing - We come up with some algoirithm that given a ALWAYS returns b. That way we can always use b to do something.
// How do I store a username and password - without knowing the username or password?

function hashingAlgorithm(string) {
  var hash = '';

  for (var i = 0; i < string.length; ++i) {
    var character = string[i];
    
    var charCode = `${character.charCodeAt(0)}`;
    hash += charCode;
  }

  return hash;
}

// signUp('Tatiana', 'password');
// logIn('Tatiana', 'password');

// console.log(userDatabase);

// The ultimate dictionary: We came up with a system to key values programmatically.
// Objects are as powerful as your imagination.
// Its a double edged sword: They are scary to manage, but immensely powerful when managed right.



// Everything in Javascript is secretly an object.

var three = new Number(3);
three.name = 'not three';
three.imNotANumber = function() {
  console.log('why did you think im a number?');
}

c(three.name);

c(three + 2);
three.imNotANumber();
c(three * 8)














