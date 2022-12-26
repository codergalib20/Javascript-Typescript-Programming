function mergeArray(array1, array2) {
  const mergeArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 0;
  let j = 0;
  // Check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergeArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergeArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
}

console.log(mergeArray([0, 23, 4, 55, 4], [34, 23, 3, 43, 3]));
