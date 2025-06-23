const binarySearch = require("./binary-search");

describe("binarySearch", () => {
  test("finds a number in the array", () => {
    expect(binarySearch([5, 1, 8, 3, 2], 3)).toBe(3);
  });

  test("returns message if number not in array", () => {
    expect(binarySearch([5, 1, 8, 3, 2], 10)).toBe("Does not exist in array");
  });

  test("works with sorted input", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toBe(4);
  });

  test("works with duplicates", () => {
    expect(binarySearch([1, 2, 2, 3, 4], 2)).toBe(2);
  });

  test("works with single element", () => {
    expect(binarySearch([7], 7)).toBe(7);
    expect(binarySearch([7], 3)).toBe("Does not exist in array");
  });

  test("works with empty array", () => {
    expect(binarySearch([], 5)).toBe("Does not exist in array");
  });
});
