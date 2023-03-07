// const user = {
//   name: "Galib",
//   age: 17,
//   magic : true,
//   scream : function () {
//     console.log('Ahhha');
//   }
// };
// user.age;
// user.name;
// user.scream();

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);

console.log(myHashTable._hash("grapes"));
