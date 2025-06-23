const isAnagram = require("./anagram-checker");

describe("isAnagram", () => {
  test("returns true for simple anagrams", () => {
    expect(isAnagram("listen", "silent")).toBe(true);
  });

  test("returns false for non-anagrams", () => {
    expect(isAnagram("hello", "world")).toBe(false);
  });

  test("returns true for anagrams with repeated letters", () => {
    expect(isAnagram("aabbcc", "abcabc")).toBe(true);
  });

  test("returns false when lengths differ", () => {
    expect(isAnagram("abc", "ab")).toBe(false);
  });

  test("returns true for empty strings", () => {
    expect(isAnagram("", "")).toBe(true);
  });

  test("is case sensitive (optional)", () => {
    expect(isAnagram("Listen", "silent")).toBe(false);
  });
});
