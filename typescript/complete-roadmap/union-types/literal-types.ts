type Point = {
  lat: number;
  long: number;
};
type Loc = {
  x: number;
  y: number;
};

const coords: (Point | Loc)[] = [];

coords.push({ lat: 3434.34, long: 3434 });
coords.push({ x: 343, y: 343 });


// let zero : 0 = 0;

// zero = 3;