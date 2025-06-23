// countVowels.test.js
const countVowels = require("./count-vowels");

test("counts vowels in a simple string", () => {
  expect(countVowels("abakadaeee")).toBe(7); // a, a, a, e, e, e
});

test("counts vowels in a mixed-case string", () => {
  expect(countVowels("AbAkAdA")).toBe(4);
});

test("ignores spaces and consonants", () => {
  expect(countVowels(" The quick brown fox ")).toBe(5); // e, u, i, o, o
});

test("returns 0 when no vowels are present", () => {
  expect(countVowels("rhythm")).toBe(0);
});
