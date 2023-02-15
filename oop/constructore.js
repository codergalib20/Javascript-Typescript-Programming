// constructor functions

function elf (name, weapon) {
    this.name = name;
    this.weapon = weapon;
}

const peter = new elf('Peter', 'stones');

console.log(peter.name);