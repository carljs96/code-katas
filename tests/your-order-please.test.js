const order = require("../src/your-order-please");

describe("test", () => {
  test("test1", () => {
    expect(order("is2 Thi1s T4est 3a")).toBe("Thi1s is2 3a T4est");
  });
});
