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

  // Delete method in javascript
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  // Custom shift method in javascript
  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("Hi!");
newArray.push("How!");
newArray.push("Are ");
newArray.push("You");
newArray.pop();
newArray.delete(1);
console.log(newArray);
