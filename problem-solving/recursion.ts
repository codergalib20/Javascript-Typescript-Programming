// Learning Recursion

function countDown(n: number) {
  // for(let i = n; i > 0; i--) {
  //     console.log(i);
  // }

  console.log(n);
  n--;
  if (n > 0) {
    countDown(n);
  }
}

countDown(21);
