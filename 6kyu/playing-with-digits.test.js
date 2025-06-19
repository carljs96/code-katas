const digPow = require("./playing-with-digits");

describe("digPow", () => {
  test("digPow(89, 1) should return 1", () => {
    expect(digPow(89, 1)).toBe(1);
  });

  test("digPow(92, 1) should return -1", () => {
    expect(digPow(92, 1)).toBe(-1);
  });

  test("digPow(46288, 3) should return 51", () => {
    expect(digPow(46288, 3)).toBe(51);
  });
});
