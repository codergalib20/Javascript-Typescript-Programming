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
}

const newArray = new MyArray();
newArray.push('Hi!')
newArray.push('How!')
newArray.push('Are ')
newArray.push('You')
console.log(newArray);
