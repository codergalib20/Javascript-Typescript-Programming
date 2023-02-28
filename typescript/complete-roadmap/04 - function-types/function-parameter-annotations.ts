function square(num: number): number {
  return num * num;
}

square(3);
// square("asad"); // -> "Error"
// square(true); // -> "Error"

function greet(person: string) {
  return `Hi! there ${person}`;
}

greet("Galib");
// greet(17); // -> "Error"
// greet(true); // -> "Error"
// greet({name : "Galib"}) // -> "Error"

function isRegular(regular: boolean) {
  return `Galib is a ${regular ? "regular" : "irregular"}`;
}

isRegular(true);
isRegular(false);
// isRegular("regular"); // -> "Error"
// isRegular(17); // -> "Error"
