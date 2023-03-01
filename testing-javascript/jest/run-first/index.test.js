const { sum, sumOfArray } = require("./index");

test("add  1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Test Looping array
test("summanation of number array 1 to 10", () => {
  expect(sumOfArray(arr)).toBe(55);
});
