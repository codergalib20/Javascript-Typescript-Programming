// const arr = [1, 2, 3];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];

// console.log(badNewArray);
// const newArr = [1, 2, ...arr];
// console.log(arr);

const restaurant = {
  menu: [1, 2, 3, 4, 4, 5],
  members: ["Rifat", "Forhad", "Galib", "Mazidul"],
};
const newArr2 = {
  ...restaurant,
  founder: "Asadullah Hil Galib",
};
console.log(newArr2);
const newArr = ["Badhon", ...restaurant.members];

console.log(newArr);
