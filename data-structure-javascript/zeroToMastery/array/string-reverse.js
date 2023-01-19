// Create a function that reverse a string:
// 'Hi My Name is Galib' should be:
// 'baliG si emaN yM iH'
function reverse(str) {
  // Check Input
  if (!str || str.length < 3 || typeof str !== "string") {
    return "Please provide a validate number";
  }
  // Functionality ----------
  const backWards = [];
  const stringIndex = str.length - 1;
  for (let i = stringIndex; i >= 0; i--) {
    backWards.push(str[i]);
  }
  return backWards.join("");
}

// console.log(reverse("My Name is Galib"));
// console.log(reverse('Asadullah'));

function reverse2(str) {
  // Check Input
  if (!str || str.length < 3 || typeof str !== "string") {
    return "Please provide a validate number";
  }
  return str.split('').reverse().join('');
}


// console.log(reverse2("My Name is Galib"));
// console.log(reverse2('Asadullah'));



const reverse3 = str => [...str].reverse().join('');

console.log(reverse3("My Name is Galib"));
console.log(reverse3('Asadullah'));