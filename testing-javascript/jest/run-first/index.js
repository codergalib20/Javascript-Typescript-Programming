function sum(a, b) {
  return a + b;
}

function sumOfArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
}

sumOfArray();

module.exports = { sum, sumOfArray };
