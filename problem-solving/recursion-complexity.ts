function sumOfArray(arr: number[]) {
  if (arr.length === 0) return 0;

  let rest = arr.slice(1);
  return rest;
}

console.log(sumOfArray([3, 3, 5]));
