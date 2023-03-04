class Person{
    constructor(name,weapon) {
        this.name = name;
        this.weapon = weapon;
    }


    attack () {
        return 'attack with + ' + this.name; 
    }
}

const xavier = new Person('Xavier', 'khan');
console.log(xavier);


const person = {
    name : 'Karen' ,
    age: 40,
    hi () {
        console.log('Hi' + this.name);
    }
};

const person3 = {
    name : "Karen",
    age: 40,
    hi: function () {
        console.log('Hi'+this.setTimeout);
    }.bind(window),
};

console.log(person3.hi());