// Higher-Order Functions:
// 1 -> // A higher-order function is a function that takes one or more functions as arguments or returns a function as its result. This allows developers to abstract away common patterns and functionality into reusable functions. Here's an example:

type NumberToNumberFunc = (x: number) => number;

function compose(
  f: NumberToNumberFunc,
  g: NumberToNumberFunc
): NumberToNumberFunc {
  return (x: number) => f(g(x));
}

function addOne(x: number): number {
  return x + 1;
}

function double(x: number): number {
  return x * 2;
}

const addOneThenDouble = compose(double, addOne);
console.log(addOneThenDouble(5));
