// const information = {
//     name : "Galib",
//     breed: "Bangladeshi",
//     age: 7.5,

// }

function printName(person: { first_name: string; last_name: string }): void {
  console.log(`My name is ${person.first_name} ${person.last_name}`);
}

printName({ first_name: "Galib", last_name: "Goin" });
