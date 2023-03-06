function sumOfAll(n) {
  let t1 = performance.now();
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  let t2 = performance.now();
  console.log("Time: ", Number((t2 - t1) / 1000).toFixed(2));
  console.log("Result: ", total);
}
sumOfAll(1000000000000000000000);

// function sumOfAll2(n) {
//   let t1 = performance.now();
//   console.log("Result: ", (n * (n + 1)) / 2);
//   let t2 = performance.now();
//   console.log("Time: ", Number((t2 - t1) / 1000).toFixed(2));
// }
// sumOfAll2(10);
