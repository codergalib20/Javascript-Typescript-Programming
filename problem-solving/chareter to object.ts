const arr: number[] = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 6, 4, 5, 4, 5, 6];

const uniqueArray = () => {
  let temp: number[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (!temp.includes(arr[i])) {
      temp.push(arr[i]);
    }
  }
  return temp;
};

console.log(uniqueArray());
