class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // Get method in javascript
  get(index) {
    return this.data[index];
  }

  // Push method in Javascript
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // Added Pop Method in Javascript
  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const newArray = new MyArray();
newArray.push("Hi!");
newArray.push("How!");
newArray.push("Are ");
newArray.push("You");
newArray.pop();
console.log(newArray);
