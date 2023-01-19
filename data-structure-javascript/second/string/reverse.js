// ---- Directions
// Give a string, return a new string with the reverse
// order of characters
// --- Examples
// reverse('apple') = 'elppa'
// reverse('ball') = 'llab'

function reverse(str) {
  const array = [];
  const strLength = str.length - 1;
  for (let i = strLength; i >= 0; i--) {
    array.push(str[i]);
  }
  return array.join("");
}

// console.log(reverse("apple"));
// console.log(reverse("Galib"));
// console.log(reverse("Asadullah"));

function reverse2(str) {
  const array = str.split("");
  array.reverse();
  return array.join("");
}

// console.log(reverse2('apple'))
// console.log(reverse2('galib'))
// console.log(reverse2('asadullah'))

function reverse3(str) {
  return str.split("").reverse().join("");
}
// console.log(reverse3("apple"));
// console.log(reverse3("galib"));
// console.log(reverse3("asadullah"));

function reverse4(srt) {
  let reversed = "";
  for (let character of srt) {
    reversed = character + reversed;
  }
  return reversed;
}

// console.log(reverse4("apple"));
// console.log(reverse4("galib"));
// console.log(reverse4("asadullah"));

function reverse5(srt) {
  return srt.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}

// console.log(reverse5('apple'))
// console.log(reverse5('galib'))
// console.log(reverse5('asadullah'))

const reverse6 = (srt) => {
  return srt.split("").reduce((rev, char) => char + rev, "");
};

console.log(reverse6("apple"));
console.log(reverse6("galib"));
console.log(reverse6("asadullah"));
