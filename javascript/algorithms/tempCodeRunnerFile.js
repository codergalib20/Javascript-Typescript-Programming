function sumOfAll2(n) {
  let t1 = performance.now();
  console.log("Result: ", (n * (n + 1)) / 2);
  let t2 = performance.now();
  console.log("Time: ", t2 - t1);
}
