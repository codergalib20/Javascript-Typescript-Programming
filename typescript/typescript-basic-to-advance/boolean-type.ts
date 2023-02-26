let booleanValue: boolean = true;

console.log(booleanValue);

function isTrue(age: any): boolean | string {
  if (typeof age === "number") {
    return age >= 18;
  }
  return "Please Provide a valid number";
}

console.log(isTrue(true));
console.log(isTrue("Hi"));
console.log(isTrue(30));
