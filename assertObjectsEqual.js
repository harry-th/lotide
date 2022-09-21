let eqObject = require('./eqObject');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObject(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab,{ a: "1", b: "2" });
assertObjectsEqual(ab,{ b: "2", a: "1" });
