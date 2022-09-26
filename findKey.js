let assertEqual = require('./assertEqual');

const findKey = (object, callback) => {
  for (let item in object) {
    if (callback(object[item])) return item;
  }
  return false;
};

const generateKey = (argument) => {
  return findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 'hello' }
  }, argument);
};

module.exports = findKey




// assertEqual(generateKey(x => x.stars === 2), 'noma');
// assertEqual(generateKey(x => x.stars === 1), 'Blue Hill');
// assertEqual(generateKey(x => x.stars === 3), 'Akaleri');
// assertEqual(generateKey(x => x.stars === 'hello'), 'Akelarre');
