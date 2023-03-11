// let zero : 0 = 0;

// zero = 3;

// let hi: "hi" = "Hi!";

// hi = "Hello";

// A function with a literal+union type parameter
const giveAnswer = (answer : "yes" | "no" | "maybe" ) => {
    return `The answer is ${answer}.`;
}

// CAN provide one of the literals in the union
giveAnswer("no"); // ✔️ The answer is no.

// CAN't provide anything else
giveAnswer("oh boy I'm not sure"); // ❌ It will show error