// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

const maxSequence = (arr) => {
  let max = arr[0];
  let current = arr[0];
  if (arr.every((x) => x > 0)) {
    return arr.reduce((acc, x) => acc + x, 0);
  } else if (arr.every((x) => x <= -0)) {
    return 0;
  } else {
    arr.slice(1).forEach((x) => {
      current = Math.max(x, current + x);
      max = Math.max(max, current);
    });
    return max;
  }
};

module.exports = maxSequence;
