const maxSequence = require("./maximum-subarray-sum");

describe("tests", () => {
  test("test", () => {
    expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
});
