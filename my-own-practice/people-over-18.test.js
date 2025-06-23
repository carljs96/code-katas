const getAdultsCapitalized = require("./people-over-18");

describe("getAdultsCapitalized", () => {
  test("filters people over 18 and capitalizes names", () => {
    const people = [
      { name: "alice", age: 17 },
      { name: "bob", age: 22 },
      { name: "charlie", age: 19 },
      { name: "dana", age: 16 },
    ];

    expect(getAdultsCapitalized(people)).toEqual(["Bob", "Charlie"]);
  });

  test("returns empty array if no one over 18", () => {
    const people = [
      { name: "alice", age: 10 },
      { name: "dana", age: 16 },
    ];
    expect(getAdultsCapitalized(people)).toEqual([]);
  });

  test("capitalizes single person name correctly", () => {
    const people = [{ name: "edward", age: 25 }];
    expect(getAdultsCapitalized(people)).toEqual(["Edward"]);
  });
});
