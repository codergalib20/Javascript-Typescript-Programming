setTimeout(() => {
    console.log("Hello first time out");
  }, 0);
  
  setTimeout(() => {
    console.log("Hello second time out");
  }, 1000);
  
  Promise.resolve("hi").then((data) => console.log("2", data));
  
  console.log("3", "is a crow");
  