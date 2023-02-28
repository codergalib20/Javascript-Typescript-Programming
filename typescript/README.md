# Typescript Basic to Advance

```
# What are Types ?
- A "Type" is a definition assigned to a value and defines thie things that you can or cannot do with that "kind" of value.
```

```
### value Defined as String
let firstName : string = "Mark";

// You CAN call all string Methods
let length = firstName.length;

// You CANNOT call number methods
let exponential = firstName.toExponential()



### Tells You things You Can Do

const sequence : numbers[] = [20,30,50,2,5,55];
sequence.forEach((number) => {
    console.log(number);
})


### Tells You Things You CANNOT Do

let user : {} = {
    name : "Mark"
    location: "London",
};

// Trying to use forEach on an Object

user.forEach((prop) => {
    console.log(prop);
})

```

<img src="https://raw.githubusercontent.com/codergalib20/Javascript-Typescript-Programming/main/assets/all-types.png" alt="All Types name in typescript">

## Types

```
- unknown type
- boolean
- number
- bigInt type
```
