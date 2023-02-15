const elfFunctions = {
    attack () {
        return 'attack with ' + this.weapon
    }
}

function createElf(name, weapon) {
  return {
    name,
    weapon,
  };
}

const peter = createElf ('Peter', 'stones');
peter.attack = elfFunctions.attack;
console.log(peter.attack());


const sam = createElf ('Sam', 'fire');
sam.attack = elfFunctions.attack;
console.log(sam.attack());



