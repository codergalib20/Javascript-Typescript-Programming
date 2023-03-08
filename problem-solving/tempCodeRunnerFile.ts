function charCount(str: string) {
  let charList: any = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.match(/[a-zA-Z]/)) {
      if (charList[char] > 0) {
        charList[char]++;
      } else {
        charList[char] = 1;
      }
    }
  }
  return charList;
}

console.log(charCount("Asadullah Hil Galib"));
