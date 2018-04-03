const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Last Friday Night
// According to the song, Katy Perry "maxed our credit cards". Write a function that takes an array of transactions like the one below, and return the total amount of what she spent last Friday night.


var transactions = [
  {
    name: "Tons of glitter",
    amount: 70
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350
  }
]

function sumTransactions (listOfTrans) {
  // We want to collect a total - totals start at 0
  var sum = 0;

  // Now we want to go over each transaction (an Object) and grab its amount (a key: value pair) and add the value to the sum.
  for (var i = 0; i < listOfTrans.length; ++i) {
    var currentTransaction = listOfTrans[i];

    sum += currentTransaction.amount;
  }

  return sum;
}

// c(sumTransactions(transactions)); // => 10512
// Bonus: Write a function that takes an array of transactions and returns the most expensive purchase. Use transactions from above and transactions2 below to test.


var transactions2 = [
  {
    name: "Minibar rental",
    amount: 3000
  }, {
    name: "DJ Fee",
    amount: 2999
  },
  {
    name: "Yard landscaping",
    amount: 2999
  }
]

function mostExpensive (listOfTrans) {
  var mostExpensiveName = '';
  var mostExpensiveCost = 0;

  for (var i = 0; i < listOfTrans.length; ++i) {
    var currentTransaction = listOfTrans[i];

    if (currentTransaction.amount > mostExpensiveCost) {
      mostExpensiveName = currentTransaction.name;
      mostExpensiveCost = currentTransaction.amount;
    }
  }

  return mostExpensiveName;
}

// c(mostExpensive(transactions)); // => "Chandelier replacement"
// c(mostExpensive(transactions2)); // => "Minibar rental"

// Frequency Analysis
// Write a function that takes a string of text (containing ONLY lowercase letters) and returns an object containing the count for each letter in the string.

function normalizedFrequency (aStr) {
  var charDict = {};

  var percentagePerChar = 1 / aStr.length;

  for (var i = 0; i < aStr.length; ++i) {
    var currentChar = aStr[i];

    if (charDict[currentChar]) {
      charDict[currentChar] += percentagePerChar;
    } else {
      charDict[currentChar] = percentagePerChar;
    }

    console.log(charDict);
  }

  return charDict;
}

// frequencyAnalysis('abca');
// => {a: 2, b: 1, c: 1}
// Bonus: Write a second function normalizedFrequency that uses your first function but returns the normalized frequency of each letter.

// Bonus:
// normalizedFrequency('abca');
// => {a: 0.5, b: 0.25, c: 0.25}

// Sum Cart
// Write a function that accepts a "shopping cart" array and returns the total bill for all the items. Each item is represented by an array, where the first element is the item name, and the second element is an object with two properties: quantity and price.

var cart = [
    ["tofu", {"quantity" : 3,"price" : 4.5} ],
    ["sriracha", {"quantity" : 1,"price" : 5} ],
    ["toilet paper", {"quantity" : 12,"price" : 1.75} ],
    ["Drano", {"quantity" : 1,"price" : 13} ],
    ["orichette", {"quantity" : 2,"price" : 7.5} ],
    ["hummus", {"quantity" : 2,"price" : 5.99} ],
    ["bison meat", {"quantity" : 3,"price" : 20.99} ],
    ["vegan bison meat", {"quantity" : 3,"price" : 24.99} ]
];

function sumCart (aCart) {
  var sum = 0;

  for (var i = 0; i < aCart.length; ++i) {
    var currentItemArr = aCart[i];
    var itemName = currentItemArr[0];
    var itemCostDetails = currentItemArr[1];

    sum += itemCostDetails.quantity * itemCostDetails.price;
  }

  return sum.toFixed(2);
}

// c(sumCart(cart));    // => 217.42

// Leet Translator
// "Leet" or 1337 is a popular alternative alphabet used by internet "hackers".

// Create a translator function that takes a string and outputs that string translated to leet.

// The leet codex is below, along with an array of english letters and an array of the corresponding leet characters. Use the two arrays to create a leetCodex object to use in making the translations.

/*
Leet Codex:
        A -> @
        B -> 8
        C -> (
        D -> |)
        E -> 3
        F -> ph
        G -> g
        H -> #
        I -> l
        J -> _|
        K -> |<
        L -> 1
        M -> |'|'|
        N -> /\/
        O -> 0
        P -> |D
        Q -> (,)
        R -> |2
        S -> 5
        T -> +
        U -> |_|
        V -> |/
        W -> |/|/'
        X -> ><
        Y -> j
        Z -> 2
*/

var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

function translate (aStr) {
  var translationDict = {};

  for (var i = 0; i < letters.length; ++i) {
    var currentLetter = letters[i];
    var currentLeet = leetChars[i];

    translationDict[currentLetter] = currentLeet;
  }

  var translatedString = '';

  for (var i = 0; i < aStr.length; ++i) {
    var currentCharacter = aStr[i].toLowerCase();

    translatedString += translationDict[currentCharacter];
  }

  return translatedString;
}

// c(translate('Fullstack'));    // => 'ph|_|115+@(|<'

// Default Values
// As a breeder, deciding upon the dogs' names is tough! So unless someone names my dog, I always name it Steve.

// Write a function called dogBreeder that takes a name and an age and returns a dog object with those properties attached to it. If someone fails to put a name in, default to Steve. If someone fails to put an age in, default to 0.

// Be careful though, sometimes the people using our function might not have nice input! (you guys asked for it!).

// function dogBreeder (nameOrAge, ageOrName) {
//   var dogObj = {
//     name: 'Steve',
//     age: 0,
//   };

//   if (nameOrAge !== undefined) {
//     if (typeof nameOrAge === 'number') {
//       dogObj.age = nameOrAge;
//     }

//     if (typeof nameOrAge === 'string') {
//       dogObj.name = nameOrAge;
//     }
//   }

//   if (ageOrName !== undefined) {
//     if (typeof ageOrName === 'number') {
//       dogObj.age = ageOrName;
//     }

//     if (typeof ageOrName === 'string') {
//       dogObj.name = ageOrName;
//     }
//   }

//   return dogObj;
// }

// Terrifying, terrible anti-pattern that nobody should ever design for anybody because you're just hurting yourself in the future.
// What are arguments?
// Code and Programming is mostly about weird contracts agreed upon between different parties.
// Sometimes your computer and the language // => memory
// Sometime the language and you // => arrays being ordered
// Sometimes you and the next programmer to look at your code // => clean code
// Programming only works when we all agree to strict rules about how things work (we might even call that being systematic lol)

// The contract of arguments is that at certain positions they infer certain things
// Clean Code -> Name parameters as the things that they do
// wtf does nameOrAge represent? nothing
// If you want to do something like this, we have a thing called an options object.

/*
 This takes an options obj like the following:
 {
   name: a string, optional,
   age: a number, optional
 }

 This is far superior.
*/
function dogBreeder (optionsObj) {
  return {
    name: optionsObj.name ? optionsObj.name : 'Steve',
    age: optionsObj.age ? optionsObj.age : 0,
  };
}

c(dogBreeder({
  name: 'Sam',
  age: 12,
}))    // => {name: 'Sam', age: 12}
c(dogBreeder({
  age: 15,
}))    // => {name:'Steve', age: 15}