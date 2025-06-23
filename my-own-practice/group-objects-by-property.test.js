const groupBy = require("./group-objects-by-property");

describe("groupBy", () => {
  test("groups objects by given key", () => {
    const input = [
      { type: "fruit", name: "apple" },
      { type: "veg", name: "carrot" },
      { type: "fruit", name: "banana" },
    ];

    const expected = {
      fruit: [
        { type: "fruit", name: "apple" },
        { type: "fruit", name: "banana" },
      ],
      veg: [{ type: "veg", name: "carrot" }],
    };

    expect(groupBy(input, "type")).toEqual(expected);
  });

  test("returns empty object for empty array", () => {
    expect(groupBy([], "type")).toEqual({});
  });

  test("groups by different keys", () => {
    const input = [
      { type: "fruit", name: "apple" },
      { type: "fruit", name: "banana" },
      { type: "fruit", name: "apple" },
    ];

    const expected = {
      apple: [
        { type: "fruit", name: "apple" },
        { type: "fruit", name: "apple" },
      ],
      banana: [{ type: "fruit", name: "banana" }],
    };

    expect(groupBy(input, "name")).toEqual(expected);
  });
});
