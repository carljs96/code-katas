//Anagram Checker

// Your task:
// Write a function `isAnagram(str1, str2)` that returns true if the two strings
// are anagrams of each other (case-insensitive), false otherwise.

// Example:
// isAnagram("listen", "silent") => true
// isAnagram("hello", "world") => false

// Write your code below:
const isAnagram = (first, second) => {
  return [...first].sort().join() === [...second].sort().join();
};

module.exports = isAnagram;
