var a = 2;
var b = a;
b++;
console.log(b);

// let obj1 = {name : "Galib", password: '222'};
// let obj2 = obj1;

// obj2.password = 'easypeasy';

// console.log(obj1);
// console.log(obj2);

// var c = [1, 2, 3, 4, 5];
// var d = [].concat(c);
//
// d.push(18434343);
//
// console.log(d);

let obj = {
  a: "a",
  b: "b",
  c: {
    deep: "Try and copy me",
  },
};
let clone = Object.assign({}, obj);
let clone2 = { ...obj };
// obj.c = 3;
obj.c.deep = 'hahahaha'
console.log(obj);
console.log(clone);
console.log(clone2);
