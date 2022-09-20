let eqArray = require('./eqArrays');

let assertArraysEqual = function(array1, array2) {
  if (eqArray(array1, array2)) {
    console.log('these arrays are truly equitable');
  } else {
    console.log('what unqiue arrays you have!');
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual([1, 2, 4], [1, 2, 3]);

