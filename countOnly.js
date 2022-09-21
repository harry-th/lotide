let assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  let answer = {};
  for (let item in itemsToCount) {
    for (let element of allItems) {
      if (!itemsToCount[item]) continue;
      if (element === item) {
        if (!answer[item]) {
          answer[item] = 0;
        }
        answer[item] += 1;
      }
    }
  }
  return answer;
};





const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);