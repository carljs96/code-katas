const fizzBuzz = require("./fizzbuzz");

describe("fizzBuzz", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("outputs correct fizzbuzz sequence up to 15", () => {
    fizzBuzz(15);

    expect(consoleSpy).toHaveBeenCalledTimes(15);
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "Fizz"); // 3
    expect(consoleSpy).toHaveBeenNthCalledWith(5, "Buzz"); // 5
    expect(consoleSpy).toHaveBeenNthCalledWith(15, "FizzBuzz"); // 15
  });
});
