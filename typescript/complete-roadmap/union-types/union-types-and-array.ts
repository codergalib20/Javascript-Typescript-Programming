const nums: (number | string | boolean | object)[] = [
  242,
  34,
  35,
  3,
  4,
  34,
  "343",
  "343",
  "error",
  true,
  { name: "Galib" },
];

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
