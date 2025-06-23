//Remove Duplicate Values

// Your task:
// Write a function `removeDuplicates(arr)` that removes duplicate values
// from an array and returns a new array with only unique values.

// Example:
// removeDuplicates([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]

// Write your code below:
const removeDuplicates = (arr) => {
  return arr.reduce((acc, x) => {
    if (!acc.includes(x)) {
      acc.push(x);
    }
    return acc;
  }, []);
};

module.exports = removeDuplicates;
