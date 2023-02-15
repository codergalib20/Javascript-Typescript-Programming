class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return "attack with " + this.weapon;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
}

// const fiona = new Elf("Fiona", "ninja stars");
// const ogre = { ...fiona };
// console.log(ogre);

// console.log(ogre.__proto__);
// console.log(fiona.__proto__);
// console.log(fiona === ogre);

const dolby = new Elf("Dolby", "cloth", "house");
console.log(dolby);
