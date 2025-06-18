// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// pigIt("Pig latin is cool"); // igPay atinlay siay oolcay
// pigIt("Hello world !"); // elloHay orldway !

const pigIt = (str) =>
  str
    .split(" ")
    .map((x) => (/^[\p{P}\p{S}]+$/u.test(x) ? x : x.slice(1) + x[0] + "ay"))
    .join(" ");

module.exports = pigIt;
