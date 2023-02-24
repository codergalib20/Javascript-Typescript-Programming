const calcAvarage = (a, b, c) => (a + b + c) / 3;

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgKoalas >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log("No team wins");
  }
};
