//Return names of people over 18, capitalized

// Given array:
const people = [
  { name: "alice", age: 17 },
  { name: "bob", age: 22 },
  { name: "charlie", age: 19 },
  { name: "dana", age: 16 },
];

// Your task:
// Filter out people under 18, then return an array of their names with the first letter capitalized.

// Expected output: ['Bob', 'Charlie']

// Write your code below:
const getAdultsCapitalized = (peopleArr) =>
  peopleArr
    .filter((x) => x.age > 18)
    .map((x) => x.name[0].toUpperCase() + x.name.slice(1));

module.exports = getAdultsCapitalized;
