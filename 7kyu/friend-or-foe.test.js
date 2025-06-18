const friend = require("./friend-or-foe");

describe("tests", () => {
  test("test 1", () => {
    expect(friend(["Ryan", "Kieran", "Mark"])).toEqual(["Ryan", "Mark"]);
  });

  test("test 2", () => {
    expect(
      friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
    ).toEqual(["Jimm", "Cari", "aret"]);
  });
});
