//3 -> // Immutable Data Structures: In functional programming, immutable data structures are preferred over mutable ones. Immutable data structures don't allow their contents to be changed after they're created, which can help prevent bugs and make the code easier to reason about. Here's an example using the readonly keyword in TypeScript to create an immutable array:

const myImmutableArray: readonly number[] = [12, 5, 4, 5, 3, 3];

console.log(myImmutableArray);
