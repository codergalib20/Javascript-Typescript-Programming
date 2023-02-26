function multiByTo(number: unknown) {
  if (typeof number === "number") {
    return number * 2;
  }
  return "Please Provide a valid number";
}

console.log(multiByTo(20));
