console.log("1");
console.log("2");
console.log("3");
function one() {
  function two() {
    console.log("4");
  }
  two();
}

one();
