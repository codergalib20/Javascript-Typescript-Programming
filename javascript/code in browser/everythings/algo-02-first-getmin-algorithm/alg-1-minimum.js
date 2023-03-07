function getMin(numbers) {
  if (!numbers.length) {
    throw new Error('Should not be an empty array!');
  }
  let currentMinimum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < currentMinimum) {
      currentMinimum = numbers[i];
    }
  }

  return currentMinimum;
}

const testNumbers = [3, 1, 2];

const min = getMin(testNumbers);

console.log(min);