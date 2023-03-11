# Introduction to Union Types

- Union types allow us to give a value few different possible SVGUnitTypes. If the eventual value's type is included, Typescript ill be happy

- e cal create a union type by using the single | (pipe character) to separate the types we want to include. It's like saying, "This thing is alloed to be this, this, or this". Typescript will enforce it from there.

```
// A function with a union type parameter

const guessAge = (age: number | string) => {
    return `Your age is ${age}`;
};

// CAN pass a number or a string!
guessAge(30); // ✔️
guessAge("28"); // ✔️

// CAN'T pass something else
guessAge({age: 32}); // ❌
```

###

- Type Narrowing
