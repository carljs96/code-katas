const productFib = require("./product-consecutive-fib");

describe("productFib", () => {
  test("should return correct Fibonacci pairs and match status", () => {
    expect(productFib(4895)).toEqual([55, 89, true]);
    expect(productFib(5895)).toEqual([89, 144, false]);
    expect(productFib(74049690)).toEqual([6765, 10946, true]);
    expect(productFib(84049690)).toEqual([10946, 17711, false]);
    expect(productFib(193864606)).toEqual([10946, 17711, true]);
    expect(productFib(447577)).toEqual([610, 987, false]);
    expect(productFib(602070)).toEqual([610, 987, true]);
  });
});
