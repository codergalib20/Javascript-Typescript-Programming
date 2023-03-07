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

global.test = test;
global.expect = expect;
