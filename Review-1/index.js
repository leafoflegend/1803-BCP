const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Nickname Generator
// Write a naive nickname generator function that takes a name and generates a nickname that is the first 3 or 4 letters (4 letters if the 3rd is a vowel).

// The nickname generator should log out the individual's full name along with their nickname in quotes, and then return the nickname.

function nicknameGenerator(aName) {
  // How do we know if something is a vowel?
  var VOWELS = 'aeiouAEIOU';

  // When we grab the letter...
  var thirdLetter = aName[2];
  if (VOWELS.indexOf(thirdLetter) !== -1) {
    // We did not find a match for this letter inside the vowels string
    return aName.slice(0, 4);
  }
 
  // We did find a match so return three
  return aName.slice(0, 3);
}

// c(nicknameGenerator("Daniel"));
// The nickname for Daniel is 'Dan'.
// => 'Dan'

// Only One
// Write a function that accepts three arguments and returns true if only one of those arguments is truthy, and false if not. Write the function without using equality comparison operators (== or ===).

function onlyOneA(a, b, c) {
  // if a is true and b is false and c is false
  // or
  // if a is false and b is true and c is false
  // or
  // if a is false and b is false and c is true
  return (!!a && !b && !c) || (!a && !!b && !c) || (!a && !b && !!c);
}

function onlyOne(a, b, c) {
  // Coercing these into booleans
  // so true or false
  // then i am adding them together
  // These forcibly coerces true and false into numbers - true is 1 and false is 0
  // If the sum of 1s and 0s being added together is 1 - then we had only one that is truthy.
  return !!a + !!b + !!c === 1;
}

// c(onlyOne(false, false, true));   // => true
// c(onlyOne(0, 1, 2));   // => false

// Bonus: Write the function without ever using a logical operator (&& or ||) or any if statements. Hint: when coerced to a number true becomes 1 and false becomes 0.

// Zero Dark Thirty
// Write a function that strips the zeros from a number, and returns the "stripped" number. If only a zero is passed in, the function should return NaN.

function removeZero(aNum) {
  // While were given a number were asked to think about this as a string
  // The only way to reference specific digits in a number is by converting a number to a string
  // then we can use bracket notation e.b. aStr[0] to grab indexes

  // String(aNum)
  var stringNum = aNum.toString();

  // Place to store non zero digits
  var zerolessString = '';

  // Loop over the string grabbing each digit.
  for (var i = 0; i < stringNum.length; ++i) {
    // Store the current digit we are on temporarily.
    var currentDigit = stringNum[i];

    // Check if it is not equal to zero...
    // If it is not equal to zero - then add it to the zeroless string
    if (currentDigit !== '0') zerolessString += currentDigit;
  }

  // Now we have this string without any zeros in it, but, we need to return a number.
  return parseFloat(zerolessString);
}

c(removeZero(102302)); // => 1232
c(removeZero(606.203)); // => 66.23
// Bonus: Write the function without ever using equality comparison operators (== or ===). Hint: You'll have to use coercion and truthy/falsey.

// VSCode / ESLint / ETC...

// Hi!