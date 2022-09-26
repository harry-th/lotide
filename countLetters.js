let assertEqual = require('./assertEqual');

let countLetters = (word) => {
  let answer = {};
  for (let letter of word) {
    if (!/\w/.test(letter)) continue;
    answer[letter] ? answer[letter] += 1 : answer[letter] = 1;
  }
  return answer;
};
module.exports = countLetters;
// console.log(countLetters('hello there'));


// assertEqual(countLetters('lhl').l,2);
// assertEqual(countLetters('lhl').h,1);

