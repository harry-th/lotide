const assertArraysEqual = require('./assertArraysEqual');


let middle = (array) => {
  if (array.length % 2 === 0) {
    return [array[array.length / 2 - 1], array[(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};


assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8]),[4,5]);
assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]);


console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4,5,6,7,8]));
console.log(middle([1,2,3,4,5,6,7]));

