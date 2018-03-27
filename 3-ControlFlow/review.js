const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Fizz Buzz
// Fizz buzz is a classic programming challenge. Write a function that accepts a single number as an argument. Count up to that number logging "Fizz" for any numbers that are divisible by 3, "Buzz" for any numbers that are divisible by 5, and "FizzBuzz" for any numbers divisible by both 3 and 5.

// Bonus: Write the function without ever using equality comparison operators (== or ===). Hint: You'll have to use coercion and truthy/falsey.

function fizzBuzz (ceiling) {
  for (var i = 1; i <= ceiling; ++i) {
    var curLog = '';

    if (i % 3 === 0) curLog += 'Fizz';
    if (i % 5 === 0) curLog += 'Buzz';

    if (curLog) console.log(curLog);
    else console.log(i);
  }
}

/*
 if () {
   ...
 } else {
   ...
 }

 vs. 

 if () ...
 else ...
*/

// fizzBuzz(15);

// Bactrian Case

// Nieve
function bactrianCase (aStr) {
  var bactrianString = '';

  for (var i = 0; i < aStr.length; ++i) {
    var currentChar = aStr[i];

    if (i % 2 === 0) bactrianString += currentChar.toUpperCase();
    else bactrianString += currentChar.toLowerCase();
  }

  return bactrianString;
}

// Crazy
// const bactrianCase = aStr => aStr
//   // I need to look at each character, so lets split the string into characters
//   .split('')
//   // For every character, if im at an odd position, make it lower case, else make it upper case
//   .map((char, i) => i % 2 ? char.toLowerCase() : char.toUpperCase())
//   // put the string back together
//   .join('');

// c(bactrianCase("thisisatest"));    // "ThIsIsAtEsT"

// Exponentiate
// In a sense, JavaScript functions resemble the functions from our algebra classes in high school.

// function exponentiate (base, power) {
//   var result = 1;

//   for (var i = 0; i < power; ++i) {
//     result *= base;
//   }

//   return result;
// }

const exponentiate = (base, power) => base ** power;

// c(exponentiate(2, 2))    // => 4
// c(exponentiate(3, 4))    // => 81

// Long Date
// Write a function that accepts a date string formatted as "mm/dd/yyyy". The function should return that date in "long" format. The date "12/25/2016" would become "December 25, 2016".

// Your function should also accept dates in the "mm/dd/yy" format ("yy" versus "yyyy"). If the argument is in this format, assume the 20th century for year values above 20, and the 21st century for year values 20 and below.

function longDate (shortDate) {
  var splitDate = shortDate.split('/'); // => [12, 25, 2016]
  // var unrefinedMonth = splitDate[0];
  // var refinedDay = splitDate[1];
  // var unrefinedYear = splitDate[2];

  // Spread Operator
  var [unrefinedMonth, refinedDay, unrefinedYear] = splitDate;

  // Dictionaries
  var MONTHS = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };

  var refinedMonth = MONTHS[unrefinedMonth];

  if (unrefinedYear > 99) {
    // return all the data we have so far
    // return refinedMonth + ' ' + refinedDay + ', ' + unrefinedYear;
    // ES6 Introduced something called template literals, heres the easy matchup:
    return `${refinedMonth} ${refinedDay}, ${unrefinedYear}`;
  }

  if (unrefinedYear <= 20) {
    return `${refinedMonth} ${refinedDay}, 20${unrefinedYear}`;
  }

  return `${refinedMonth} ${refinedDay}, 19${unrefinedYear}`;
}

// c(longDate('12/25/2016'));    // => "December 25, 2016"
// c(longDate('4/1/16'));    // => "April 1, 2016"
// c(longDate('7/12/55'));    // => "July 12, 1955"

// Most Vowels
// Write a function that accepts a string and returns the word from that string with the most vowels.

// If there are no words with strings, return the empty string.

function mostVowels (aStr) {
  // Total amount of vowels per word
  // We need to break down the string we are initially given into words
  // We need to track which word is currently the most voweled
  // How do we know which word has the most vowels? - CORE Problem
  // We need to be able to set the most voweled word to whichever word comes up with more vowels
  // After all of that, hopefully, weve captured the word with the most vowels
  var maxVowels = 0;
  var maxVowelWord = '';

  var wordsArray = aStr.split(' ');
  var VOWELS = 'aeoiuAEIOU';

  for (var i = 0; i < wordsArray.length; ++i) {
    var currentWord = wordsArray[i];
    var currentVowelCount = 0;
    
    for (var j = 0; j < currentWord.length; ++j) {
      var currentChar = currentWord[j];

      // That means i found it - -1 is indexOf's return value for 'not found'
      if (VOWELS.indexOf(currentChar) !== -1) {
        ++currentVowelCount;
      }
    }

    // Were done counting this words vowels... we need to compare against the max vowels
    if (currentVowelCount > maxVowels) {
      maxVowels = currentVowelCount;
      maxVowelWord = currentWord;
    }

    // Were done with this word, so were about to move on to the next word...
  }

  return maxVowelWord;
}

// c(mostVowels("I am a keeper with some real rhythms"));
// => "keeper"
// Bonus: Write a function that accepts two strings. The function should search through the first string, and return the word with the most instances of the second string.

var shakespeareQuote = "To climb steep hills requires slow pace at first";

function findMost (aStr, searchTerm) {
  var maxTermCount = 0;
  var maxTermWord = '';

  var wordsArray = aStr.split(' ');

  for (var i = 0; i < wordsArray.length; ++i) {
    var currentWord = wordsArray[i];
    var currentTermCount = 0;
    
    // We currently run this loop to the end of the word - but because were searching by a size of chunk
    // that means that at some point we may be at a place in the string where there are no more chunks
    // of the required size left in the string
    for (var j = 0; j < currentWord.length - searchTerm.length; ++j) {
      var currentTerm = currentWord.slice(j, j + searchTerm.length);

      if (currentTerm === searchTerm) ++currentTermCount;
    }

    if (currentTermCount > maxTermCount) {
      maxTermCount = currentTermCount;
      maxTermWord = currentWord;
    }
  }

  return maxTermWord;
}

c(findMost(shakespeareQuote, "re"));
// => "requires"