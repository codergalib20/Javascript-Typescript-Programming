const { subtract, sum } = require("./math");

let result, expected;

result = sum(3, 7);

expected = 10;
// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }
expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;
// if (result !== expected) {
//   throw new Error(`${result} is not equal to ${expected}`);
// }
expect(result).toBe(expected);

function test(title, callback) {
  try {
    callback();
    console.log(`✔️ ${title}`);
  } catch (error) {
    console.error(`❌ ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toEqual(expected) {},
    toBeGreaterThan(expected) {},
  };
}
