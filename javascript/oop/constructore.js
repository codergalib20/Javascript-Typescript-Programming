// // constructor functions

// function Elf (name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
// }

// const peter = new Elf('Peter', 'stones');

// console.log(peter.name);

class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack () {
    return 'attack with' + this.weapon;
  }
}


const peter = new Elf('Peter', 'stones');
console.log(peter);