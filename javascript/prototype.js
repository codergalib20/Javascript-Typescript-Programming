// function foo (a,b,c) {
//     return a * b * c;
// }

// console.log(foo.length);

// console.log(foo.constructor())

// console.log(typeof foo.prototype);

// console.log(foo.prototype);
// console.log(foo.prototype = {});

// function Gadget(name, color) {
//   this.name = name;
//   this.color = color;
//   this.whatAreYou = function () {
//     return "I am a " + this.color + " " + this.name;
//   };
// }

// Gadget.prototype.price = 100;
// Gadget.prototype.rating = 3;
// Gadget.prototype.getInfo = function () {
//   return "Rating : " + this.rating + " price : " + this.price;
// };

// // Gadget.prototype = {
// //   price: 100,
// //   rating: 4,
// // };

// const newtoy = new Gadget('Webcam', 'black');
// console.log(newtoy)
// console.log(newtoy.getInfo())

// function Gadget(name) {
//   this.name = name;
// }
// ;
// console.log(Gadget.prototype.name = 'mirror');
// const toy = new Gadget('camera');
// console.log(toy.name);
// console.log(toy.hasOwnProperty('name'));
// console.log(delete toy.name);
// console.log(toy.name);

let params = {
  productId: 666,
  section: "products",
};

let url = "http://example.org/page.php?",
  i,
  query = [];

for (i in params) {
  query.push(i + "=" + params[i]);
}

url += query.join("&");

console.log(url);
