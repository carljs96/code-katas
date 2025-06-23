const flattenArray = require("./flatten-nested-array");

describe("flattenArray", () => {
  test("flattens nested arrays of arbitrary depth", () => {
    expect(flattenArray([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
  });

  test("returns empty array when given empty array", () => {
    expect(flattenArray([])).toEqual([]);
  });

  test("returns same array if already flat", () => {
    expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("handles arrays with different types", () => {
    expect(flattenArray([1, ["a", [true, [null]]]])).toEqual([
      1,
      "a",
      true,
      null,
    ]);
  });
});
