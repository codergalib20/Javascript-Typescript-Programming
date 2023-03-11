function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(32);
printAge("34");

function calculateTax(price: number | string, tax: number): number | void {
  //   return price * tax;
  if (typeof price === "string") {
    price.replace("$", "");
  } else {
    return price * tax;
  }
}
