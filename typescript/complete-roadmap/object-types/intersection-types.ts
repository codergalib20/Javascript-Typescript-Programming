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
