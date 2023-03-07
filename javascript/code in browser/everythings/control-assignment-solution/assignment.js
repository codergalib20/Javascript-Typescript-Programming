const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber >= 0.7) {
  alert('Greater or equal than 0.7.');
} else {
  alert('Not greater!');
}

const numbers = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (const num of numbers) {
  console.log(num);
}

let counter = 0;
while (counter < numbers.length) {
  console.log(numbers[counter]);
  counter++;
}

// for loop => backwards

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

const randomNumber2 = Math.random();

console.log(randomNumber);
console.log(randomNumber2);
if (
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  randomNumber <= 0.2 ||
  randomNumber2 <= 0.2
) {
  alert('Greater than 0.7 or smaller than 0.2.');
}
