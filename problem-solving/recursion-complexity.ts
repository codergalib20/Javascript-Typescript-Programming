function sumOfArray(arr: number[]): number {
  if (arr.length === 0) return 0;

  let rest = arr.slice(1);
  return arr[0] + sumOfArray(rest);
}

console.log(sumOfArray([2, 3, 5]));
