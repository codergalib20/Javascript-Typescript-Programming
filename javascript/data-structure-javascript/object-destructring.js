const resturant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },
  orderDelivery: function ({ time, adress, starterIndex, mainIndex }) {
    console.log(
      `Order receive! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivery to ${adress} at ${time}`
    );
  },
};

resturant.orderDelivery({
  time: "22:30",
  adress: "VIa del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = resturant;

console.log(name, openingHours, categories);

const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = resturant;
console.log(resturantName, hours, tags);

// set default value for an object
const { menu = [], starterMenu: starters = [] } = resturant;

console.log(menu, starters);

// Mutating variables || change variable value;
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
