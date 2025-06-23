// Challenge 8: Chunk an Array

// Your task:
// Write a function `chunkArray(arr, size)` that splits an array into chunks
// of the specified size and returns them in a new array.

// Example:
// chunkArray([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

// Write your code below:
const chunkArray = (arr, size) => {
  const returnArr = [];
  for (let index = 0; index < arr.length; index += size) {
    returnArr.push(arr.slice(index, index + size));
  }
  return returnArr;
};

module.exports = chunkArray;
