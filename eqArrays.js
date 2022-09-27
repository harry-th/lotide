let eqArrays = function(array1, array2) {
  let length;
  let length1 = array1.length;
  let length2 = array2.length;
  length1 > length2 ? length = length1 : length = length2;
  for (let i = 0; i < length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArrays(array1[i],array2[i])) return false;
      else continue;
    } else if (Array.isArray(array1[i]) || Array.isArray(array2[i])) {
      return false;
    }
    if ((array1[i] !== array2[i])) return false;
  }
  return true;
};
console.log(eqArrays([[1,2],2,[[1,2],2]],[[1,2],2,[[1,2],2]]));

module.exports = eqArrays;