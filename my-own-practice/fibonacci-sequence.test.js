const fib = require("./fibonacci-sequence");

describe("tests", () => {
  test("test1", () => {
    expect(fib(5)).toBe(5);
  });
});
