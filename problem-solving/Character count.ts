function charCount(str: string) {
  let charList: object = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    console.log(charList[char]);
  }
}

charCount("Asadullah Hil Galib");
