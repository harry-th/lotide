const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return console.log('✅✅✅ ' + `Assertion passed: ${actual} === ${expected}`);
  } else {
    return console.log('🛑🛑🛑 ' + `Assertion failed: ${actual} === ${expected}`);
  }
};


module.exports = assertEqual;
