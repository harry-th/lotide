
let flatten = (array) => {
  const flat = [].concat(...array);
  if (!array.some((item) => {
    return Array.isArray(item);
  })) {
    return flat;
  }
  return flatten(flat);
};
module.exports = flatten

// let array = [1, 2, 3, [1, 2, 3], 1, 2, 3];
// let array2 = [1, 2, 3, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 1, 2, 3];


// console.log({ test1: flatten(array), test2: flatten(array2) });

// let flatten = (array) => {
//   while (array.some((item) => {
//     return Array.isArray(item);
//   })) {
//     array = [].concat(...array);
//   }
//   return array;
// };
