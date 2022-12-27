const romanToInt = (num) => {
  const base = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  const iter = (acc, num) => {
    const [first, ...restWithoutOne] = num;
    const [second, ...restWithoutTwo] = restWithoutOne;
    if (num.length === 0) return acc;
    return base[first] < base[second]
      ? iter(acc + base[first + second], restWithoutTwo)
      : iter(acc + base[first], restWithoutOne);
  };
  return iter(0, num);
};
console.log(romanToInt("MCMXCIV"));

// M = 1000
// CM = 900
