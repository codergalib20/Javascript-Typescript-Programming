type Circle = {
  redius: number;
};

type Color = {
  color: string;
};

type ColorCircle = Circle & Color;

const happyFace: ColorCircle = {
  redius: 4,
  color: "navy",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 9,
};
