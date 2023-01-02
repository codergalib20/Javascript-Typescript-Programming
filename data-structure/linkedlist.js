// Node ------
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
// List
class LinkedList {
  constructor() {
    this.head = null;
  }
  // Insert First
  insertFirst(data) {
    const newData = (this.head = new Node(data, this.head));
    return this.head;
  }
};


const myLinkedList = new LinkedList();
console.log(myLinkedList.insertFirst({ name: "Galib", school: "Nilphamari" }));
console.log(myLinkedList.insertFirst({ name: "Galib", school: "Nilphamari" }));
console.log(myLinkedList.insertFirst({ name: "Galib", school: "Nilphamari" }));

