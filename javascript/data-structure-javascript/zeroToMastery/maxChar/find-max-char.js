function findMaxChar(str) {
  let charList = {};
  let max = 0;
  let maxChar = null;
  for (const char of str) {
    if (!charList[char]) {
      charList[char] = 1;
    } else {
      charList[char]++;
    }
  }
  for (const maxCount in charList) {
    if (max < charList[maxCount]) {
      max = charList[maxCount];
      maxChar = maxCount;
    }
  }
  return maxChar;
}

// console.log(findMaxChar("ami asadullah hil galib"));
console.log(findMaxChar("ami asadullah hil galib"));
