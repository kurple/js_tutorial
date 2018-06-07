const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

// Unique words
let uniques = {};
// All words in the text
let words = sonnet.match(/[\w']+/g);

// Iterate through `words` and build up an associative array of unique words.
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  if (uniques[word]) {
    uniques[word] += 1;
  } else {
    uniques[word] = 1;
  }
}

console.log(uniques);

// The Map method.

// Unique words using Map
let uniquesUsingMap = new Map();

// Iterate through `words` and build up a map of unique words.
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let currentValue = uniquesUsingMap.get(word);
  if (uniquesUsingMap.get(word)) {
    uniquesUsingMap.set(word, currentValue + 1);
  } else {
    uniquesUsingMap.set(word, 1);
  }
}

console.log(uniquesUsingMap);

// Convert the original JavaScript object to a map.

// Credit to Stack Overflow for the following helper function.
// https://stackoverflow.com/questions/36644438/how-to-convert-a-plain-object-into-an-es6-map
function buildMap(obj) {
  let map = new Map();
  Object.keys(obj).forEach(key => {
    map.set(key, obj[key]);
  });
  return map;
}

// Should log "true" to the console.
console.log(String(buildMap(uniques)) === String(uniquesUsingMap));
