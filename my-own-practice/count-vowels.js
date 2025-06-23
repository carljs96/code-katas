// Your task:
// Write a function `countVowels(str)` that returns the number of vowels (a, e, i, o, u)
// in the given string. The function should be case-insensitive.

// Example:
// countVowels("Hello World") => 3
// countVowels("AEIOU xyz") => 5

// Write your code below:
const countVowels = (str) =>
  [...str.trim().toLowerCase()].filter((x) => x.match(/[aeiou]/gi)).length;

module.exports = countVowels;
