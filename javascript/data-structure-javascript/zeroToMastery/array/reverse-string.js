// function reverse(str) {
//   // Check input
//   if (!str || str.length < 2 || typeof str !== "string") {
//     return "Please give a valide string";
//   }
//   const backwards = [];

//   //   for(let )
//   const totalLength = str.length - 1;
//   for (let i = totalLength; i >= 0; i--) {
//     backwards.push(str[i]);
//     console.log(i);
//   }
//   console.log(backwards.join(''));
// }
function reverse(str) {
  // Check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Please give a valide string";
  }
  return [...str].reverse().join('');
}

console.log(reverse("Galib"));
console.log(reverse("Asadullah"));
console.log(reverse("Hil"));
console.log(reverse("Hi! My Name is Asadullah Hil Galib"));
