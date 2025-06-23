const fib = require("./fibonacci_sequence");

describe("tests", () => {
  test("test1", () => {
    expect(fib(5)).toBe(5);
  });
});
