const chunkArray = require("./chunk-an-array");

describe("chunkArray", () => {
  test("splits array into chunks of given size", () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test("returns empty array when input is empty", () => {
    expect(chunkArray([], 3)).toEqual([]);
  });

  test("returns entire array in one chunk if size >= array length", () => {
    expect(chunkArray([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });

  test("handles size of 1 (each element in its own chunk)", () => {
    expect(chunkArray([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  test("handles size equal to array length", () => {
    expect(chunkArray([1, 2, 3, 4], 4)).toEqual([[1, 2, 3, 4]]);
  });
});
