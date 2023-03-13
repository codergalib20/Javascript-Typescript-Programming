// 2 -> // Pure Functions: A pure function is a function that always returns the same output given the same input and doesn't have any side effects (such as modifying global state or mutating input parameters). This makes it easy to reason about the behavior of the function and can help prevent bugs. Here's an example:
function add(x: number, y: number): number {
  return x + y;
}

console.log(add(2, 3));
