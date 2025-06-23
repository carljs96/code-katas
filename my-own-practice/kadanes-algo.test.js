const kad = require("./kadanes-algo");

describe("kad (Kadane's algorithm)", () => {
  test("returns max subarray sum for positive and negative numbers", () => {
    expect(kad([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6); // [4,-1,2,1]
    expect(kad([1, 2, 3, 4, 5])).toBe(15); // whole array
    expect(kad([-1, -2, -3, -4])).toBe(-1); // max single element
    expect(kad([5, -2, 3, -1, 2])).toBe(7); // [5,-2,3,-1,2]
  });

  test("returns correct result for single element array", () => {
    expect(kad([10])).toBe(10);
    expect(kad([-10])).toBe(-10);
  });

  test("returns 0 for empty array (if your code handles it)", () => {
    expect(kad([])).toBe(0);
  });
});
