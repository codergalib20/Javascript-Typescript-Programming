function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(32);
printAge("34");

function calculateTax(price: number | string, tax: number): number {
  //   return price * tax;
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}
