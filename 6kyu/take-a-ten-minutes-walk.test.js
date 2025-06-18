const isValidWalk = require("./take-a-ten-minutes-walk");

describe("tests", () => {
  test("True Test", () => {
    expect(
      isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
    ).toBe(true);
  });
  test("True Test", () => {
    expect(
      isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])
    ).toBe(true);
  });

  test("False Test", () => {
    expect(isValidWalk(["w"])).toBe(false);
  });
  test("False Test", () => {
    expect(
      isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])
    ).toBe(false);
  });
});
