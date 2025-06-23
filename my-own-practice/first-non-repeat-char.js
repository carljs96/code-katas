// Find the First Non-Repeating Character

// Your task:
// Write a function `firstNonRepeatingChar(str)` that returns the **first character**
// in the string that does **not repeat** anywhere else.
// If all characters repeat, return `null`.

// The function should be case-insensitive, but return the character in its **original case**.

// Examples:
// firstNonRepeatingChar("aAbcbd") => "c"
// firstNonRepeatingChar("xXyYzZ") => null

// Write your code below:

const firstNonRepeatingChar = (str) => {
  const counts = {};

  for (const char of str.toLowerCase()) {
    counts[char] = (counts[char] || 0) + 1;
  }

  for (const char of str) {
    if (counts[char.toLowerCase()] === 1) {
      return char;
    }
  }

  return null;
};

module.exports = firstNonRepeatingChar;
