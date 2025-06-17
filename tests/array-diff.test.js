const arrayDiff = require("../src/array-diff");

describe("tests", () => {
  test("test 1", () => {
    expect(arrayDiff([1, 2], [1])).toEqual([2]);
  });
});
