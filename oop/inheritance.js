class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
 
    attack () {
        return 'attack with ' + this.weapon;
    }
}

const fiona = new Elf('Fiona', 'ninja stars');
const ogre = {...fiona};
console.log(ogre);