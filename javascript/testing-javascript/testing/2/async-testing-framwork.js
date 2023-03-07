const { subtractAsync, sumAsync } = require("./math");

async function substractTest() {
  const result = await subtractAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
}
test("substruct substructs numbers", substractTest);

async function sumTest() {
  const result = await sumAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
}
// To use test function
test("sum adds number", sumTest);

