let coordinate: {
  x: number;
  y: number;
} = { x: 100, y: 200 };

function randomCordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

randomCordinate();
