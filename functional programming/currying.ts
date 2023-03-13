// 6 -> // Currying: Currying is a technique where a function that takes multiple arguments is transformed into a sequence of functions that each take a single argument. This can help make your code more modular and easier to compose. Here's an example of a curried function:

function add(x: number): (y: number) => number {
  return function (y: number): number {
    return x + y;
  };
}

const add5 = add(5);
console.log(add5(3));