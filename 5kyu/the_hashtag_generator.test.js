const generateHashtag = require("./the_hashtag_generator");

describe("generateHashtag", () => {
  test("returns false for empty string", () => {
    expect(generateHashtag("")).toBe(false);
  });

  test("returns false for string with only spaces", () => {
    expect(generateHashtag("     ")).toBe(false);
  });

  test("capitalizes words and adds #", () => {
    expect(generateHashtag("hello world")).toBe("#HelloWorld");
  });

  test("removes extra spaces between words", () => {
    expect(generateHashtag("   hello    world   ")).toBe("#HelloWorld");
  });

  test("returns false if resulting hashtag is longer than 140 characters", () => {
    const longString = "a ".repeat(140); // 280 chars including spaces
    expect(generateHashtag(longString)).toBe(false);
  });

  test("works with single word", () => {
    expect(generateHashtag("code")).toBe("#Code");
  });

  test("returns false if result is just #", () => {
    expect(generateHashtag("    ")).toBe(false);
  });
});
