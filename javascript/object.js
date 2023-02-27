// let hero = {
//   breed: "Turtle",
//   occupation: "Ninja",
//   say: function () {
//     return "I am " + hero.occupation;
//   },
// };

// console.log(hero.say());

// let hero = {
//     name: "Rafaelo",
//     sayName : function () {
//         return this.name;
//     }
// }

// function Hero(name) {
//   this.occupation = "Ninja";
//   this.name = name;
//   this.whoAreYou = function () {
//     return "I'm " + this.name + " and I'm a " + this.occupation;
//   };
// }

// const hero1 = new Hero("Galib");
// console.log(hero1.whoAreYou());
// const hero2 = new Hero("Asadullah");
// console.log(hero2.whoAreYou());
// const hero3 = new Hero("Hi!");
// console.log(hero3.whoAreYou());

// function factory(name) {
//   return {
//     name: name,
//   };
// }

// function C() {
//   this.a = 1;
// }
// const c = new C();
// const c1 = new C();
// const c2 = new C();

function C2() {
  this.a = 1;
  return { b: 2 };
}
const c = new C2();
