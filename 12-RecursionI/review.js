const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Count Vowels
// Write a function that accepts a string and returns the number of vowels in that string. Use recursion.

// Base Case: Were gonna have no more letters left in the string
// Recursive Case: There are more letters in the string
// Update: We should move left -> right across the string (this is what most of you likely didnt do the right way)

function countVowels (aStr) {
  var VOWELS = 'aeiouAEIOU';

  // Base Case: Out of letters
  if (!aStr) {
    return 0;
  }
  // If we still have letters, grab the first letter
  var currentLetter = aStr[0];

  // Check if that letter is a vowel
  var isVowel = VOWELS.indexOf(currentLetter) !== -1;

  // Store the entire string, besides that letter
  var restOfString = aStr.slice(1);

  // If it was a vowel
  if (isVowel) {
    // Add 1 and return
    return 1 + countVowels(restOfString);
  }

  // If it wasnt a vowel, dont add anything, and add the rest of the string
  return 0 + countVowels(restOfString);
}

// c(countVowels('Four score and seven years'));    // => 9

// Hunting the smallest repeatable step and turning it into a recursive function
// the hard part is identifying the smallest repeatable step

// Reverse Array
// Write a function that accepts an array and returns a reversed copy of that array. Use recursion.

var arr = [1,2,3,4]

// -> take the last el, and concat the rest of the els onto it
// [1, 2 ,3, 4]
// [4].concat(rA[1, 2, 3])

// [1, 2, 3]
// [3].concat(rA[1, 2])

// [1, 2]
// [2].concat(rA[1])

// [1] -> theres nothing to do -> return it

// [2].concat([1])
// [2, 1]

// [3].concat([2, 1])
// [3, 2, 1]

// [4].concat([3, 2, 1])
// [4, 3, 2, 1]

function reverseArray (anArr) {
  if (anArr.length === 1) return anArr;

  var lastElem = anArr[anArr.length - 1];

  var reversedRestOfArray = reverseArray(anArr.slice(0, -1));

  return [lastElem].concat(reversedRestOfArray);
}

// const rA = arr => arr.length === 1 ? arr : [arr[arr.length - 1]].concat(rA(arr.slice(0, -1)));

var reversedArr = reverseArray(arr);

// console.log(reversedArr)    // [4,3,2,1]
// console.log(arr)    // [1,2,3,4]

// Sum Digits
// Write a function that sums all the digits of a given integer (assume positive). Use recursion.

// for (var i = 0; i < length; ++i) -> semantically saying: grab the current thing, go over the rest of the things, and keep adding them one at a time, and end when no things are left

// Grab the current digit, go over the rest of the digits, adding them, until there are none left.
function sumDigits (digits) {
  // We need a string to handle individual digits
  var strDigits = digits.toString();

  // If there is only one digit left - we return it.
  if (strDigits.length === 1) return parseInt(strDigits);

  // Grab the 0 index digit
  var curDigit = parseInt(strDigits[0]);
  // And the rest of the number
  var restOfDigits = parseInt(strDigits.slice(1));

  // add the curDigit to the result of calling sumDigits on every other number
  return curDigit + sumDigits(restOfDigits);
}

// console.log(sumDigits(1234));    // => 10

// the first return value is:
// 4 (base case)
// 3 + 4 === 7
// 2 + (3) === 7 === 9
// 1 + (2) === 9 === 10

// We can negate the need to think BOTTOM UP. In recursion we only need to think TOP DOWN. When does this end? Whats the first return value? Start accumulating and debugging from that point - NOT FROM YOUR FIRST FUNCTION CALL. Thats a very common amature way of thinking through this.

// Fibonacci
// Create a function that takes a number n and returns the nth number in the Fibonacci sequence. The Fibonacci sequence is a series of numbers in which each number is the sum of the two numbers preceding it.

// ex: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55....

// Were exploiting a ADT called a Tree. Youve never heard of an ADT - thats an abstract data structure. We are using a tree to break this problem into a funky constituent that i can try to express
function fibonacci (num) {
  if (num <= 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

/*
4
-> return fib(3)          +        fib(2)
-> return fib(2)       +        fib(1)     || return fib(1) + fib(0)
-> returb fib(1) + fib (0)   || return !!1!!     || return !!1!! || return 0
-> return !!1!!      ||  return 0
*/

// Fibonacci creates a sprawling tree that only ends at 1 nodes - and conglomerates them all together - its exploiting a weird mathematical truth that fibonacci has one constituent part we can exploit and that is that we know that it itself is comprised of 1, and 1 and its first two numbers.

// console.log(fibonacci(4));    // => 8

// Greatest Common Divisor
// In mathematics, the greatest common divisor (gcd) for a set of numbers is the largest positive integer that divides the numbers without a remainder. For example, the gcd of 8 and 12 is 4.

// Write a function that accepts two positive integers and recursively computes (and returns) the greatest common divisor.

// To solve this problem, it will be helpful to read about Euclid's algorithm. The key observation behind Euclid's algorithm is that the gcd of two numbers also divides their difference.

// To compute gcd(48,18), divide 48 by 18 to get a quotient of 2 and a remainder of 12. Then divide 18 by 12

function gcd (a, b) {
  var remainder = a % b;

  if (remainder === 0) return b;

  return gcd(b, remainder);
}

// console.log(gcd(18, 48));    // => 4