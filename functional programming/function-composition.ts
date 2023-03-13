// 5 -> // Function Composition: Function composition is a technique where you combine two or more functions to create a new function. This can help make your code more modular and easier to reason about. Here's an example using the pipe function from the lodash/fp library to create a composed function:

import { pipe } from "lodash/fp";

function addOne(x: number): number {
  return x + 1;
}

function double(x: number): number {
  return x * 2;
}

const addOneThenDouble = pipe(addOne, double);
console.log(addOneThenDouble(5));
