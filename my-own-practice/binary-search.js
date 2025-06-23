const binarySearch = (arr, search) => {
  arr.sort((a, b) => a - b);
  const searchHelper = (inArr) => {
    if (inArr.length === 0) return "Does not exist in array";
    const midIndex = Math.floor(inArr.length / 2);
    const mid = inArr[midIndex];
    if (search === mid) {
      return mid;
    } else if (search < mid) {
      return searchHelper(inArr.slice(0, midIndex));
    } else {
      return searchHelper(inArr.slice(midIndex + 1));
    }
  };
  return searchHelper(arr);
};

module.exports = binarySearch;
