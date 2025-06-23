const solution = require("./multiple-of-3-and-5");

test("solution returns sum of multiples of 3 or 5 below given number", () => {
  expect(solution(10)).toBe(23); // 3 + 5 + 6 + 9 = 23
  expect(solution(0)).toBe(0); // no numbers below 0
  expect(solution(1)).toBe(0); // no multiples below 1
  expect(solution(16)).toBe(60); // 3 + 5 + 6 + 9 + 10 + 12 + 15 = 60
});
