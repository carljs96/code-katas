// removeDuplicates.test.js
const removeDuplicates = require("./remove-duplicate-values");

describe("removeDuplicates", () => {
  test("removes duplicates from array of numbers", () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("removes duplicates from array of strings", () => {
    expect(removeDuplicates(["a", "b", "a", "c", "b"])).toEqual([
      "a",
      "b",
      "c",
    ]);
  });

  test("returns empty array when input is empty", () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  test("returns same array if no duplicates", () => {
    expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("handles mixed types", () => {
    expect(removeDuplicates([1, "1", 1, "1"])).toEqual([1, "1"]);
  });
});
