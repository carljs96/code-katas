/*
Problem: Digits to Consecutive Powers

Given two positive integers n and p:

1. Split n into its digits.
2. Raise each digit to a power starting from p and increasing by 1 for each digit.
3. Sum those powered digits.
4. If the sum is a multiple of n, return the multiplier k (i.e. sum = n * k).
5. Otherwise, return -1.

Examples:
digPow(89, 1) ➞ 1
// 8^1 + 9^2 = 8 + 81 = 89 = 89 * 1

digPow(695, 2) ➞ 2
// 6^2 + 9^3 + 5^4 = 1390 = 695 * 2

digPow(92, 1) ➞ -1
// 9^1 + 2^2 = 9 + 4 = 13 ≠ multiple of 92
*/

const digPow = (n, p) => {
  let m = p;
  const sum = [...n.toString()]
    .map((x) => Number(x))
    .map((x) => {
      const v = x ** m;
      m++;
      return v;
    })
    .reduce((acc, x) => acc + x, 0);
  return Number.isInteger(sum / n) ? sum / n : -1;
};

module.exports = digPow;
