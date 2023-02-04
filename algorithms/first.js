const memo = ["nemo"];

const everyone = [
  "galib",
  "badhon",
  "rifat",
  "fohat",
  "nemo",
  "mazidul",
  "mamun",
];

function findMemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo");
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + "milliseconds");
}


findMemo(memo)
