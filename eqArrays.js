
let eqArrays = function(array1, array2) {
  let length;
  let length1 = array1.length;
  let length2 = array2.length;
  length1 > length2 ? length = length1 : length = length2;
  for (let i = 0; i < length; i++) {
    if ((array1[i] !== array2[i])) return false;
  }
  return true;
};


module.exports = eqArrays;

// {assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true
//   assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false); // => false
//   assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
//   assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false
//   assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);}

