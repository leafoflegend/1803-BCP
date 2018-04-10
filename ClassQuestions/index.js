const dupeArray = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7];

// Nieve - ES5(ish)
function discoverDupes (anArr) {
  // Lets make an object to store the counts of each elem
  const keyDict = {};

  // Loop over the array, grabbing each element
  for (let i = 0; i < anArr.length; ++i) {
    // Grab the elem
    const currentElem = anArr[i];

    // If the elem is a key in the obj already
    if (keyDict[currentElem]) {
      // Increase its count by 1
      keyDict[currentElem] = keyDict[currentElem] + 1;
    } else {
      // Otherwise, set its count to 1
      keyDict[currentElem] = 1;
    }
  }

  // Take a look at keyDict for a better understanding
  // { '1': 2, '2': 2, '3': 2, '4': 2, '5': 1, '6': 1, '7': 1 }
  console.log(keyDict);

  // Initialize the number we are going to use to count dupes.
  let dupeCount = 0;

  // So now we have an object with elems as the key - and the count of them as their value.
  for (let key in keyDict) {
    // Grab the value - name it count.
    const count = keyDict[key];

    // If the count is greater than 1, increase the dupe count
    if (count > 1) ++dupeCount;
  }

  // Return the dupe count
  return dupeCount;
}

// Fancy - all the same logic, but using modern syntax
const discoverDupesFancy = arr => Object
  .entries(arr.reduce((kD, e) => {
    return kD[e] ? { ...kD, [e]: kD[e] + 1 } : { ...kD, [e]: 1 };
  }, {}))
  .filter(([k, v]) => v > 1)
  .length

console.log(discoverDupes(dupeArray));
console.log(discoverDupesFancy(dupeArray));
