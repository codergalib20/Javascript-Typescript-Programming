function sum(a, b) {
  return a + b;
}

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// sumOfArray();

module.exports = { sum, sumOfArray };
