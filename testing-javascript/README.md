## testing in javascript

```
const sum = (a, b) => a + b;
const substruction = (a, b) => a - b;

let result = sum(3, 7);
let expected = 10;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = substruction(8, 3);

expected = 4;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

```

# Make my own testing function

```
const { subtract, sum } = require("./math");


let result, expected;

result = sum(3, 7);

expected = 10;
expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;
expect(result).toBe(expected);

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
```
