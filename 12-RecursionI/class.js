const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// All structures that move through collections contain the same three things:
// An initialization
// A condition
// An update

// var i = 0; - initialization - this is the init, because it START the movement through a collection
// i < 10; - condition - it defines when we END the movement through a collection
// ++i - update - it defines HOW we move through a collection
// for (var i = 0; i < 10; ++i) {
//   // bodys are optional
//   console.log(i);
// }

// All programming languages need only three things to work: storage, logic, iteration
// var
// for
// if

// Recursion does not avoid those same three things.
// initialization - its calling a function
// condition - base case - when do i STOP calling the function
// update - recursive case - what do i call the next function call WITH

// Recursive Countdown
// We might think of this as the initialization - what is the first 'num' passed to me
function recursiveCountdown (num) {
  // I need a condition - this is 'countdown' so the condition is probably, the num is 0 or less
  if (num <= 0) {
    // this is the base case
    console.log('Liftoff!');
  } else {  
    // Update - I am updating 'i'
    recursiveCountdown(2);  
    console.log(num);
  }
}

// recursiveCountdown(3);

// recursiveCountdown(3);

// function recursiveCountdown (3) {
//   // I need a condition - this is 'countdown' so the condition is probably, the num is 0 or less
//   if (3 <= 0) {
//     // this is the base case
//     console.log('Liftoff!');
//   } else {
//     // Update - I am updating 'i'
//     function recursiveCountdown (2) {
//       // I need a condition - this is 'countdown' so the condition is probably, the num is 0 or less
//       if (2 <= 0) {
//         // this is the base case
//         console.log('Liftoff!');
//       } else {
//         // Update - I am updating 'i'
//         function recursiveCountdown (1) {
//           // I need a condition - this is 'countdown' so the condition is probably, the num is 0 or less
//           if (1 <= 0) {
//             // this is the base case
//             console.log('Liftoff!');
//           } else {
//             // Update - I am updating 'i'
//             function recursiveCountdown (0) {
//               // I need a condition - this is 'countdown' so the condition is probably, the num is 0 or less
//               if (0 <= 0) {
//                 // this is the base case
//                 console.log('Liftoff!');
//               } else {
//                 // Update - I am updating 'i'
//                 recursiveCountdown(num - 1);
//                 console.log(num);    
//               }
//             }
//             console.log(1);    
//           }
//         }
//         console.log(2);    
//       }
//     }
//     console.log(3);    
//   }
// }

// function recursiveCountdown (3) {
//   // I need a condition - this is 'countdown' so the condition is probably, the num is 0 or less
//   if (3 <= 0) {
//     // this is the base case
//     console.log('Liftoff!');
//   } else {
//     console.log(3);  
//     // Update - I am updating 'i'
//     function recursiveCountdown (2) {
//       // I need a condition - this is 'countdown' so the condition is probably, the num is 0 or less
//       if (2 <= 0) {
//         // this is the base case
//         console.log('Liftoff!');
//       } else {
//         console.log(2);  
//         // Update - I am updating 'i'
//         function recursiveCountdown (1) {
//           // I need a condition - this is 'countdown' so the condition is probably, the num is 0 or less
//           if (1 <= 0) {
//             // this is the base case
//             console.log('Liftoff!');
//           } else {
//             console.log(1);  
//             // Update - I am updating 'i'
//             function recursiveCountdown (0) {
//               // I need a condition - this is 'countdown' so the condition is probably, the num is 0 or less
//               if (0 <= 0) {
//                 // this is the base case
//                 console.log('Liftoff!'); // => end
//               } else {
//                 console.log(num);  
//                 // Update - I am updating 'i'
//                 recursiveCountdown(num - 1);  
//               }
//             } 
//           }
//         } 
//       }
//     } 
//   }
// }

// We, as astute developers know that code runs top-bottom, left-to-right as much as it possibly can.
// Theres one exception that we know about: calling a function - thats when code from some other part of the document runs, even if it was defined before we wrote it in the file.
// Its actually not breaking the rule - its being interpreted by javascript as being top-bottom. So an example:

// function doAThing () {
//   console.log('I did a thing');
// }

// function logSomething () {
//   console.log('something');
// }

// function allTheThings () {
//   // The important moment is the invocation.
//   // The rule in Javascript (almost every lanuage) is that each function has to run and complete, before, the next function can run.
//   logSomething();
//   doAThing();
// }

// allTheThings();

// function saySomething () {
//   console.log('something');
//   function doAnotherThing () {
//     console.log('I did another thing');
//   }
//   doAnotherThing();
// }

// function logThree () {
//   saySomething();
//   console.log(3);  
// }

// logThree();

// In Computer Science there are two kinds of data structures that we use:

// FILO - First in Last out
// FIFO - First in First out

// We use FIFO structures at stores, movie theatres, etc we call it a 'line' or a 'queue'
// FILO is less common in real life - but i can make an analogy: a stack of pancakes

// With pancakes, we cook a pancake, then we flip it onto a plate. Then we cook another pancake, and we flip it onto the plate. Which is the first pancake your fork touches?

// Recursion is a FILO structure. The first function we call - is the last function to finish.

// 5! -> 5 * 4 * 3 * 2 * 1

function factorial (aNum) {
  // Base Case - When we get to 1, we do not need to go any further, please stop
  if (aNum === 1) return aNum;
  // Recursive Case - Were anything but 1
  // Update - aNum - 1 -> I need to get closer to 1 every time i run this function
  return aNum * factorial(aNum - 1);
}

c(factorial(5));

/*
 factorial(5)
 return 5 * factorial(4)
    factorial(4)
    return 4 * factorial(3)
      factorial(3)
      return 3 * factorial(2)
        factorial(2)
        return 2 * factorial(1)
          factorial(1)
          return 1
        return 2 * 1 === 2
      return 3 * 2 === 6
    return 4 * 6 === 24
  return 5 * 24 === 120
120
*/

// MEMORY IS CHEAP