```
let params = {
  productId: 666,
  section: "products",
};

let url = "http://example.org/page.php?",
  i,
  query = [];

for (i in params) {
  query.push(i + "=" + params[i]);
}

url += query.join("&");

console.log(url);
console.log(query);
```
