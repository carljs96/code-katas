const filter_list = require("./list_filtering");

describe("filter_list", () => {
  test("removes strings from list and keeps only numbers", () => {
    expect(filter_list([1, 2, "a", "b"])).toEqual([1, 2]);
    expect(filter_list([1, "a", "b", 0, 15])).toEqual([1, 0, 15]);
    expect(filter_list([1, 2, "aasf", "1", "123", 123])).toEqual([1, 2, 123]);
  });

  test("returns empty array when all elements are strings", () => {
    expect(filter_list(["a", "b", "c"])).toEqual([]);
  });

  test("returns the same array when all elements are numbers", () => {
    expect(filter_list([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("handles empty array", () => {
    expect(filter_list([])).toEqual([]);
  });
});
