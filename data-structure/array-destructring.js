const resturant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzaria", "Vigetarian"],
  startMenu: ["Foccaccia", "Bruschetta", "Garlic", "Bread", "Caprese sa;ad"],
  mainMenu: ["Pizza", "Pasta", "Risatta"],
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, secondary] = resturant.categories;
console.log(main, secondary);

// ------------- Switching Variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary)