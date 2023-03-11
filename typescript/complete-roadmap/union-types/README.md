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
- Literal Types

### Literal types are not just types - but the values themselves too!

On it's own, that's not super helpful. But combine it with something like unions and you can have very fine-tuned type options for Typescript to enforce.

```
// A function with a literal+union type parameter
const giveAnswer = (answer : "yes" | "no" | "maybe" ) => {
    return `The answer is ${answer}.`;
}

// CAN provide one of the literals in the union
giveAnswer("no"); // ✔️ The answer is no.

// CAN't provide anything else
giveAnswer("oh boy I'm not sure"); // ❌ It will show error
```
