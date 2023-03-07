console.log(document.querySelector(".message"));
console.log(document.querySelector("#message"));
console.log(document.querySelector("h2"));

console.log(document.getElementById("message"));
console.log(document.getElementsByClassName("message"));
console.log(document.getElementsByTagName("h2"));

document.getElementById("message").innerHTML =
  "<span>This is get element by id</span>";
document.querySelector("h2").textContent = "Welcome to text content";

document.querySelector(".message").innerText =
  "Welcome to inner Text class message";
console.log(
  "Input field > ",
  (document.querySelector("input").value = "012345678")
);

// document.querySelector('button').addEventListener('click', () => {
//     document.querySelector('input').value = '';
//     // document.querySelector('input').value = 'sdfsd';
// })

// document.querySelector('button').addEventListener('click', function () {
// console.log(this);
// })

const eventFunc = function () {
  console.log(this);
  this.innerText = "My name is button";
  this.disabled = true;
  this.type = 'submit';
};

document.querySelector("button").addEventListener("click", eventFunc);
