function reverse(str) {
  // Check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Please give a valide string";
  }
  const backwards = [];

  //   for(let )
  const totalLength = str.length - 1;
  for (let i = totalLength; i >= 0; i--) {
    backwards.push(str[i]);
    console.log(i);
  }
  console.log(backwards.join(''));
}

reverse("Galib");
reverse("Asadullah");
reverse("Hil");
reverse("Hi! My Name is Asadullah Hil Galib");
