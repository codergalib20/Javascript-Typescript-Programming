let age: number | string | boolean = 21;

age = 32;
age = "32";
age = true;

let active: string | boolean | number = true;
active = 1;
active = "true";
active = false;

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 42 };
coordinates = { lat: 343.43, long: 343434 };
