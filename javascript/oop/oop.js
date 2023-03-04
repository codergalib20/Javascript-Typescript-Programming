class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  data() {
    return {
      name: this.name,
      age: this.age,
    };
  }
}

const myClass = new Student("Galib", 18);

console.log(myClass);
