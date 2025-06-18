const decodeMorse = require("./morse-decoder");

describe("Sample tests", () => {
  test("Example from description", () => {
    expect(decodeMorse(".... . -.--   .--- ..- -.. .")).toBe("HEY JUDE");
  });

  test("Leading and trailing spaces", () => {
    expect(decodeMorse("   .... . -.--   ")).toBe("HEY");
  });
});
