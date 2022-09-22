let assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

console.log(map(words, word=> word[0] + (word[1] ? word[1] : '') + (word[2] ? word[2] : '')));

assertArraysEqual(map(words, word=> word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word=> word[0] + (word[1] ? word[1] : '') + (word[2] ? word[2] : '')), [ 'gro', 'con', 'to', 'maj', 'tom' ]);
assertArraysEqual(map(words, word=> word[0].repeat(2)), [ 'gg', 'cc', 'tt', 'mm', 'tt' ]);
