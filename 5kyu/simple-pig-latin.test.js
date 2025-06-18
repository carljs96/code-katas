const pigIt = require("./simple-pig-latin");

describe("test", () => {
  test("test 1", () => {
    expect(pigIt("Pig latin is cool !")).toBe("igPay atinlay siay oolcay !");
  });
});
