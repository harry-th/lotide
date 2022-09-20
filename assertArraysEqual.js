let eqArray = require('./eqArrays');

let assertArraysEqual = function(array1, array2) {
  if (eqArray(array1, array2)) {
    console.log('these arrays are truly equitable');
  } else {
    console.log('what unqiue arrays you have!');
  }
};

module.exports = assertArraysEqual;