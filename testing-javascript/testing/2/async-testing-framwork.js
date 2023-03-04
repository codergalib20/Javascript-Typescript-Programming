const { subtractAsync, sumAsync } = require("./math");

async function substractTest() {
  const result = await subtractAsync(7, 3);
  const expected = 10;
  expect(result).toBe(expected);
}
test("substruct substructs numbers", substractTest);

async function sumTest() {
  const result = await sumAsync(7, 3);
  const expected = 10;
  expect(result).toBe(expected);
}
// To use test function
test("sum adds number", sumTest);

// Make test function to use in all testing
async function test(title, callback) {
  try {
    await callback();
    console.log(`✔️ ${title}`);
  } catch (error) {
    console.error(`❌ ${title}`);
    console.error(error);
  }
}

// make expected function
function expect(actula) {
  return {
    toBe(expected) {
      if (actula !== expected) {
        throw new Error(`${actula} is not equal to ${expected}`);
      }
    },
  };
}
