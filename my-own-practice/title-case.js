//Title Case a Sentence

// Your task:
// Write a function `titleCase(str)` that returns the input string
// with the first letter of each word capitalized and the rest in lowercase.

// Example:
// titleCase("i'm a little tea pot") => "I'm A Little Tea Pot"

// Write your code below:
const titleCase = (str) => {
  return str
    .trim()
    .split(" ")
    .filter((x) => x.trim() != "")
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(" ");
};
module.exports = titleCase;
