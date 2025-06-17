const digitalRoot = require("../src/sum-of-roots");

describe("Tests", () => {
  test("test 1", () => {
    expect(digitalRoot(123)).toBe(6);
  });
});
