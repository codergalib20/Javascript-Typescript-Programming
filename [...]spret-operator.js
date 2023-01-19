const arr = [1, 2, 3];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];

console.log(badNewArray);
const newArr = [1, 2, ...arr];
console.log(arr);
