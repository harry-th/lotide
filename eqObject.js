let assertEqual = require('./assertEqual');
let eqArrays = require('./eqArrays');
const eqObjects = function(object1, object2) {
//   let checkArrayEquality = function(array1, array2) {
//     if (array1.length !== array2.length) return false;
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) return false;
//     }
//     return true;
//   };
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  console.log(object1, object2);
  let condition = (variable) => {
    return typeof variable === 'object' && !Array.isArray(variable) && variable !== null;
  };

  let checkEquality = function(object1, object2) {
    for (let item in object1) {
      let value1 = object1[item];
      let value2 = object2[item];
      if (Array.isArray(value1) && Array.isArray(value2)) {
        return eqArrays(value1, value2);
      } else if (condition(value1) && condition(value2)) {
        return eqObjects(value1, value2);
      }
      if (!Object.keys(object2).includes(item)) return false;
      else if (value1 !== value2) return false;
    }
    return true;
  };
  if (checkEquality(object1, object2)) {
    return true;
  } else {
    return false;
  }
};


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };


// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(abc, ba), false);

// const cd3 = { c: ["1"], d: ["2", 3] };
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

const dc1 = { d: {"2": 3}, c: "1" };
const dc2 = { d: {"2": 3}, c: "1" };
const dc3 = { d: {hello: 'neighbor',"2": 3}, c: "1", h:'1' };

assertEqual(eqObjects(dc1, dc2),true);
assertEqual(eqObjects(dc1, dc3),false);


// assertEqual(eqObjects(cd, dc),true); // => true
// assertEqual(eqObjects(cd3, dc),false); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false



