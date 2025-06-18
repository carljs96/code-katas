const spinWords = require("./stop-gninnips-my-sdrow");

describe("test", () => {
  test("test 1", () => {
    expect(spinWords("Welcome")).toBe("emocleW");
  });

  test("test 2", () => {
    expect(spinWords("Just kidding there is still one more")).toBe(
      "Just gniddik ereht is llits one more"
    );
  });
});
