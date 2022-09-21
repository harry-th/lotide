let assertArraysEqual = require('./assertArraysEqual');

let countLetters = (word) => {
  let answer = {};
  for (let i = 0; i < word.length; i++) {
    if (!/\w/.test(word[i])) continue;
    answer[word[i]] ? answer[word[i]].push(i) : answer[word[i]] = [i];
  }
  return answer;
};

console.log(countLetters('hello there'));

console.log(Object.values(countLetters('hello')).flat());

assertArraysEqual(Object.values(countLetters('helloh')).flat(),[0,5,1,2,3,4]);
