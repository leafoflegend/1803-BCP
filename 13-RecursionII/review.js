const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Array Sum
// Write a fuction that accepts an array and returns the sum of all the numbers in the array (no matter how nested!).

function arraySum (anArr) {
  var sum = 0;

  // i < anArr.length -> base case
  for (var i = 0; i < anArr.length; ++i) {
    var currentElem = anArr[i];

    if (Array.isArray(currentElem)) {
      // recursive call
      sum += arraySum(currentElem);
    } else {
      sum += currentElem;
    }
  }

  return sum;
}

// c(arraySum([1, [2, 3, [4]]]));    // => 10

// Palindromes
// A palindrome is a word that is spelled the same forward and backward. For example, "LEVEL", "RACECAR", and "KAYAK" are all palindromes, while "MOTOR", "RUDDER", and "DOGGED" are not palidromes.

// Write a recursive function to check if a string is a palindrome or not.

// Falsification
function isPalindrome (aStr) {
  if (aStr.length <= 1) return true;

  var sanitizedString = aStr.toLowerCase();

  if (sanitizedString[0] !== sanitizedString[sanitizedString.length - 1]) {
    return false;
  }

  return isPalindrome(aStr.slice(1, -1));
}

// c(isPalindrome("Kayak"))    // => true
// c(isPalindrome("NEVERODDOREVEN"))    // => true
// c(isPalindrome("Tacocat"))    // => true
// c(isPalindrome("SELFLESS"))    // => false

// All Systems Go
// You are working for NASA because you are super cool! It's up to you to write the code that will determine if "all systems are go for launch". Your function will receive a deeply nested object. Keys represent the name of a system on the spacecraft; values are boolean "true" if the system is "go" for launch and "false" otherwise. Your function should return "true" only if every system is "go" for launch!

var systems = {
  power: {
    batteries: true,
    solarCells: true,
    generator: true,
    fuelCells: true
  },
  telecoms: {
    antennas: {
      highGain: true,
      mediumGain: true,
      lowGain: true
    },
    transmitter: true,
    receiver: true
  },
  attitudeControl: {
    stabilization: {
      spin: true,
      threeAxis: true
    }
  },
  propulsion: {
    engines: {
      engine1: true,
      engine2: true,
      engine3: true
    },
    thrusters: true,
    propellant: true
  },
  environment: {
    cooling: true,
    heating: true,
    lifeSupport: true
  }
};

// Given an absurd object, tell me whether every primitive value inside of it is true.
// This problem is a lot easier if you paid attention during objects.
// What i mean - is best simplified to a question: 'Do we need the keys?'
// Object.values
function allSystemsGo (aSystem) {
  const systemValues = Object.values(aSystem);

  return systemValues.every(function (sysVal) {
    if (typeof sysVal === 'object') {
      return allSystemsGo(sysVal);
    } else return sysVal;
  });
}

// c(allSystemsGo(systems)); // => false

// Sugar Smash
// You are developing the next big mobile game "Sugar Smash", a thinly-disguised knock off of "Candy Crush".

// Write a function that takes and returns a string. If any character is repeated three or more times in a row, remove (or "smash") those characters from the string before returning it. For example:

// sugarSmash('abbccca'); // => 'abba'
// Things get interesting when you have to chain multiple "smashes" together. For example:

// sugarSmash('abbcccba');
// // smash the c's and you're left with 'abbba'
// // smash the b's and you're left with 'aa'
// Use recursion to make sure the game keeps smashing characters until the string has reached a stable state and no more smashing is required!

// Here are some interesting test cases you can use to see if your game is ready for the app store:

// Given a string, take out any characters that repeat three or more times in a row. The complex part, is that after we remove those three characters, put the string back together, and if there are now new characters in a row more than three times, take those out.

function sugarSmash (aStr) {
  var currentLetter = aStr[0];
  var currentCount = 1;

  for (var i = 1; i < aStr.length; ++i) {
    var nextLetter = aStr[i];

    if (nextLetter === currentLetter) {
      ++currentCount;
    } else if (currentCount >= 3) {
      var arrString = aStr.split('');
      
      arrString.splice(i - currentCount, currentCount);

      return sugarSmash(arrString.join(''));
    } else {
      currentCount = 1;
      currentLetter = nextLetter;
    }
  }

  if (currentCount >= 3) {
    return aStr.slice(0, aStr.length - currentCount);
  }

  return aStr;
}

// c(sugarSmash('aaabbcccbddeefffedbffgfffgg')); // => 'bff'
// c(sugarSmash('aabbccddeeffgghhiijjkkllmmnnooppponmlkjihgfedcba')); // => ''

// Group Sum (bonus)
// This is a bonus problem that is more challenging than the problems you will encounter as an applicant to a competitive bootcamp. Apply help tickets liberally!

// Given an array of numbers and a non-zero target number, is it possible to choose a group of some of the numbers, such that the group sums to the given target?

function groupSum (arrOfNums, target) {
  // Iterative Branching -> We attempt to have the computer use two varying thought processes on how to arrive at this answer. This means that they are competing. When one thought loses, the other picks up.
  if (target === 0) return true;
  if (!arrOfNums.length) return false;

  var bruteForchPathResult = groupSum(arrOfNums.slice(1), target - arrOfNums[0]);

  if (bruteForchPathResult) return true;

  var skipPathResult = groupSum(arrOfNums.slice(1), target);

  return skipPathResult;
}

c(groupSum([2, 4, 8], 10)); // => true, because 2 + 8 = 10
c(groupSum([2, 4, 8], 9)); // => false, because no combination of 2, 4, and 8 equals 9

// This is how Path Finding algorithms work.
// If youve played video games and wonder how enemies find you.
// Or if you wonder how your GPS determines the fastest route.