let eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
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

module.exports = eqObjects;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };


// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(abc, ba), false);

// const cd3 = { c: ["1"], d: ["2", 3] };
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// const dc1 = { d: {"2": 3}, c: "1" };
// const dc2 = { d: {"2": 3}, c: "1" };
// const dc3 = { d: {hello: 'neighbor',"2": 3}, c: "1", h:'1' };

// assertEqual(eqObjects(dc1, dc2),true);
// assertEqual(eqObjects(dc1, dc3),false);


// assertEqual(eqObjects(cd, dc),true); // => true
// assertEqual(eqObjects(cd3, dc),false); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;


// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
// assertEqual(eqObjects({ a: { z: {r:{y:'n'}} }, b: 2 }, { a: { z: {r:{y:'n'}} }, b: 2 }), true);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
