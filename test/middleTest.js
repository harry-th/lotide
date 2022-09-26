let assertArraysEqual = require('../assertArraysEqual')
let middle = require('../middle.js')

assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4,5,6,7,8]),[4,5]);
assertArraysEqual(middle([1,2,3,4,5,6,7]),[4]);
