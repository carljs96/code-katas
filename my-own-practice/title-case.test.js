const titleCase = require("./title-case");

describe("titleCase", () => {
  test("capitalizes the first letter of each word", () => {
    expect(titleCase("hello world")).toBe("Hello World");
  });

  test("trims leading and trailing spaces", () => {
    expect(titleCase("   hello world   ")).toBe("Hello World");
  });

  test("works with single word", () => {
    expect(titleCase("javascript")).toBe("Javascript");
  });

  test("handles empty string", () => {
    expect(titleCase("")).toBe("");
  });
});
