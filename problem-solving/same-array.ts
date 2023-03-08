function same(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    throw new Error("Array langth are not same");
  }

  for (let i = 0; i < arr1.length; i++) {
    let currentIndex = arr2.indexOf(arr1[i] ** 2);
    if (currentIndex === -1) {
      return false;
    }
    arr2.splice(currentIndex, 1);
    return true;
  }
}

console.log(same([2, 3, 4, 52], [3, 4, 5]));
