let tail = require('../tail.js')
let assertEqual = require('../assertEqual')

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");

const assert = require('chai').assert;
const tail   = require('../tail');
describe("#tail", () => {
  it("returns 5 for [1,2,3,4,5]", () => {
    assert.deepEqual(tail([1,2,3,4,5]), 5);
  });
  it("returns 8 for [1,2,3,4,5,6,7,8]", () => {
    assert.deepEqual(tail([1,2,3,4,5,6,7,8]), 8); 
  });
  it("returns 7 for [1,2,3,4,5,6,7]", () => {
    assert.deepEqual(tail([1,2,3,4,5,6,7]), 7); 
  })
});

