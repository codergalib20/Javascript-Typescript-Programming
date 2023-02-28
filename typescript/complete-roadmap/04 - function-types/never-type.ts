function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never{
  while (true) {
    console.log(`Game Loop Running`);
  }
}
