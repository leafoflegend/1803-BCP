const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// else should be on another line, as well as console.log('true')
// semicolons
// spelling errors
// first console.log() should go underneath function doSomething

// I dont like the lack of space between doSomething and ()
// I also dont like the lack of space between the () and the  {
// Yes, 100% console.log needs to be on another line
// And, yes, spelling counts nobody wants to read a sloppy persons code, and hiii is not real talk
// function doSomething(){ console.log('hiii there')
// // if true makes no sense, why is this an if if it does nothing - this will always evaluate to true
// // console.log should be on another line
// // i dont think we needed curly braces for this if
// // I also think if should be indented by one unit
// // else on another line - doesnt need curly braces
// if (true) {console.log('true')} else {
//   // this does nothing what is this
//   // 2 units of indentation here not 1
//   false;
// }
// // why is this console.log indented but not the if up above
//   console.log('done');
// }

// Indentation is actually a really simple policy:
// Anytime we open a curly brace e.g. { - we make a new line - adn we indent every line from this point forward 1 indentation unit
// We continue this indentation with that amount until we see a closing curly brace - at which point we make that brace have its own line, and we de-indent every line thereafter with 1 unit of indentation

// Padded lines - i like there being an empty line before and after an if block

// Semi-Colon consistency
// I dont care whether you do or do not use semi-colons just be consistent about using them (or lack thereof)
function doSomething() {
  console.log('hiii there');
  console.log('true');
  console.log('done');
}

doSomething();

// unit of indentation
// tabs vs spaces
// When you hit the tab button on your computer it isnt always emitting a tab
// Sometimes it emits spaces, sometimes it emits tabs, it depends on the environment you are typing in
// The choice of what your tab key emits is a big deal
// Tabs are the following character
'\t'

// tabs are interpreted by each persons computer to represent a different size.
// The size they represent is configurable per computer.
// That means that if joe likes using 4 tabs per indent - but each tab on his computer is one space (so 4 spaces)
// But jenny downloads joes code and her tabs are 8 spaces (36 spaces)
// On jennys computer the code would look like:
// if () {
//                                                                             console.log('hji');
// }

// The argument for tabs is that they are a way to have code show up on everyones computer the way they like to see it.
// Each person can configure tabs to be the size they like

// Spaces
// Theyre boring, theyre just spaces. You know what a space is.

// Spaces have your code look the same across everybodys computer. Thats it. If people dont like your code style, well, fuck em, and if they do then good for you. ?Theyre gonna get it however you shipped it.

// Consistency.
// I dont care if you become a tab believer or a spaces believer BUT DO NOT MIX THEM. THAT IS AN ACCURSED ACTION.

// Psychopathic Maintainer Law - Can the psychopath who can kill you understand this function?
// function thisIsAFunction (a, b, d) {
//   return a + b / d;
// }

// Microsoft XP









