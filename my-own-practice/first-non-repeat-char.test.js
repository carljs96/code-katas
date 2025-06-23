// firstNonRepeatingChar.test.js
const firstNonRepeatingChar = require("./first-non-repeat-char");

describe("firstNonRepeatingChar", () => {
  test("returns first non-repeating character (case insensitive)", () => {
    expect(firstNonRepeatingChar("stress")).toBe("t"); // s repeats, t is first unique
  });

  test("returns the character itself with original casing", () => {
    expect(firstNonRepeatingChar("Swiss")).toBe("w");
  });

  test("returns null if all characters repeat", () => {
    expect(firstNonRepeatingChar("aabbcc")).toBeNull();
  });

  test("works with single-character string", () => {
    expect(firstNonRepeatingChar("z")).toBe("z");
  });

  test("returns first unique ignoring case", () => {
    expect(firstNonRepeatingChar("aAbBABac")).toBe("c");
  });
});
