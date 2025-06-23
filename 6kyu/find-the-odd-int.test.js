const findOdd = require("./find-the-odd-int");

test("findOdd returns the number that occurs an odd number of times", () => {
  expect(findOdd([1, 1, 2])).toBe(2);
  expect(findOdd([0, 1, 0, 1, 0])).toBe(0);
  expect(findOdd([10])).toBe(10);
  expect(findOdd([5, 4, 3, 4, 3, 5, 3])).toBe(3);
});
