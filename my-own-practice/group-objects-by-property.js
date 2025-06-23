//Group Objects by Property

// Your task:
// Write a function `groupBy(arr, key)` that groups an array of objects by a specific key.

// Example:
// groupBy([{type: "fruit", name: "apple"}, {type: "veg", name: "carrot"}, {type: "fruit", name: "banana"}], "type")
// => { fruit: [{...}, {...}], veg: [{...}] }

// Write your code below:
const groupBy = (arr, key) => {
  return arr.reduce((acc, x) => {
    if (!acc[x[key]]) {
      acc[x[key]] = [x];
    } else {
      acc[x[key]].push(x);
    }
    return acc;
  }, {});
};
console.log(
  groupBy(
    [
      { type: "fruit", name: "apple" },
      { type: "veg", name: "carrot" },
      { type: "fruit", name: "banana" },
    ],
    "type"
  )
);
module.exports = groupBy;
