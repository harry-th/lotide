let assertArraysEqual = require('./assertArraysEqual.js');
let without = function(array, conditions) {
  let answer = [];
  let isItInThere = function(item) {
    for (let condition of conditions) {
      if (item === condition) {
        return false;
      }
    }
    return true;
  };
  for (let item of array) {
    if (isItInThere(item)) {
      answer.push(item);
    }
  }
  return answer;
};
module.exports = without

// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));
// console.log(without(["1", "2", "3"], ['hello', 2, "3"]));
// console.log(without(["1", "2", "3"], ['1', 2, "3"]));



// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);