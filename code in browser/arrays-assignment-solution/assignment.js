const numbers = [1, -22, 100, 4, 5, 6];

const numsGreater5 = numbers.filter(val => val > 5);
console.log(numsGreater5);

const mappedNumbers = numbers.map(val => ({ num: val }));
console.log(mappedNumbers);

const multiplication = numbers.reduce(
  (curResult, curValue) => curResult * curValue,
  1
);
console.log(multiplication);

function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}

console.log(findMax(...numbers));

function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}

const [min, max] = findMinMax(...numbers);

console.log(min, max);

const userIds = new Set();
userIds.add(10);
userIds.add(-5);
userIds.add(-5);

console.log(userIds);