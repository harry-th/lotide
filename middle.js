const assertArraysEqual = require('./assertArraysEqual');


let middle = (array) => {
  if (array.length % 2 === 0) {
    return [array[array.length / 2 - 1], array[(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};

module.exports = middle

