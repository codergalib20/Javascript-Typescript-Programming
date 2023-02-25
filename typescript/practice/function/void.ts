// Perfect
function MyFunc(msg: string): void {
  console.log(`Hello ${msg}`);
  console.log(`Welcome to ${msg}`);
}

// Error
function MyFunc2(msg: string): void {
  console.log(`Hello ${msg}`);
  return `Welcome ${msg}`;
}
