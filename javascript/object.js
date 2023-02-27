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

// function C2() {
//   this.a = 1;
//   return { b: 2 };
// }
// const c = new C2();

// let ninja = {
//   name: "Ninja",
//   say: function () {
//     return "I am a " + this.name;
//   },
// };

/*==========================================================
==========================NUMBER============================
==========================================================*/

let n = Number("10.10");
// console.log(typeof n); -> number

let n1 = new Number("12.12");
// tyepof n1 -> number

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE)
// console.log(Number.isFinite())

let number = new Number(111.3434);
// console.log(n.toFixed(2)); -> 111.34

/*==========================================================
=========================String===========================
==========================================================*/
const srt1 = 'Galib';
console.log(srt1[2]);
const srt2 = new String('Galib');
console.log(srt1[2]);
console.log('potatoes'.length);
console.log('potatoes'.charCodeAt(2));
console.log('potatoes'.indexOf('o'));
console.log('potatoes'.includes('ta'));
console.log('potatoes'['potatoes'.length -1]);
/*==========================================================
==========================================================
==========================================================*/
/*==========================================================
==========================================================
==========================================================*/
/*==========================================================
==========================================================
==========================================================*/
/*==========================================================
==========================================================
==========================================================*/
