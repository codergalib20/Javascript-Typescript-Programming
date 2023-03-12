const arr: number[] = [23, 3, 4, 5, 1, 2, 323, 4, 34, 2, 33, 2];

const findHigherAndLowerNumber = (arr: number[]) => {
  // defind higher and lower variable
  let higher: number = arr[0];
  let lower: number = arr[0];

  // iterate the whole array
  for (let i = 0; i < arr.length; i++) {
    if (higher < arr[i]) {
      higher = arr[i];
    } else if (lower > arr[i]) {
      lower = arr[i];
    }
  }
  // return the numbers
  return {
    lower,
    higher,
  };
};

console.log(findHigherAndLowerNumber(arr));
