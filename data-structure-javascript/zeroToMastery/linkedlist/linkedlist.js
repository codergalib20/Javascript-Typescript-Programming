// Custom Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// List
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  // Code here to append
  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  //   Code to make prepend
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  //   Code to print list
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  //   Insert Node list
  insert(index, value) {
    // check params
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traversToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
  }
  traversToIndex(index) {
    // check params
    const counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
  }
}

const myLinkedList = new LinkedList({ name: "A", age: 11 });
myLinkedList.append({ name: "B", age: 12 });
myLinkedList.append({ name: "C", age: 13 });
myLinkedList.prepend({ name: "D", age: 14 });
myLinkedList.prepend({ name: "D", age: 14 });
// console.log(myLinkedList);
console.log(myLinkedList.printList());
