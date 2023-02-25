function throwError(msg: string): never {
  throw new Error(`This is an new error ${msg}`);
}

function neverStop(): never {
  while (true) {
    console.log(`GAME IS RUNNING or NOT STOPPING`);
  }
}
