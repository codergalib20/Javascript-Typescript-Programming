// 4 -> // Recursion: Recursion is a technique where a function calls itself to solve a problem. This can be a powerful tool in functional programming and can help simplify code by reducing the need for mutable state. Here's an example of a recursive function that calculates the factorial of a number:

function factorial(n: number): number {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}


console.log(factorial(5))