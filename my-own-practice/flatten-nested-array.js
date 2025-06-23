//Flatten a Nested Array

// Your task:
// Write a function `flattenArray(arr)` that takes an array with nested arrays
// and returns a flat array with all elements.

// Example:
// flattenArray([1, [2, [3, 4]], 5]) => [1, 2, 3, 4, 5]

// Write your code below:
const flattenArray = (arr) => {
  return arr.flat(Infinity);
};

module.exports = flattenArray;
