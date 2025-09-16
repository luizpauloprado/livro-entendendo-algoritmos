// https://leetcode.com/problems/detonate-the-maximum-bombs/description/
// bombs[i] = [xi, yi, ri]
// X-coordinate, Y-coordinate, radius

// My code
var maximumDetonation = function (bombs) {
  let toDetonate = [...bombs];
  let results = [];

  while (toDetonate.length > 0) {
    // get one bomb
    const currentToDetonate = toDetonate.pop();
    const x = currentToDetonate[0];
    const y = currentToDetonate[1];
    const r = currentToDetonate[2];
    const rx = [x - r, x + r];
    const ry = [y - r, y + r];
    console.log("=============");
    console.log(currentToDetonate);
    console.log("rx: " + rx);
    console.log("ry: " + ry);

    // iterate the bombs
    let counter = 0;
    let numberOfExplosions = 0;
    while (counter < bombs.length) {
      const bomb = bombs[counter];
      const bombX = bomb[0];
      const bombY = bomb[1];
      const bombR = bomb[2];
      console.log("bomb: " + bomb);

      // if detonates - add to result
      // square
      const insideRx = bombX >= rx[0] && bombX <= rx[1];
      const insideRy = bombY >= ry[0] && bombY <= ry[1];
      const isInside = insideRx && insideRy;
      // console.log("insideRx " + insideRx);
      // console.log("insideRy " + insideRy);
      // console.log("isInside " + isInside);
      //circle
      // const distance = Math.sqrt(((bombX - x) * (bombX - x)) + ((bombY - y) * (bombY - y)));
      // const isInside = distance <= r;

      if (isInside) {
        numberOfExplosions += 1;
      }

      counter += 1;
    }

    results.push(numberOfExplosions);
  }
  console.log("number of explosions: " + results);
  const result = Math.max(...results);
  console.log("result: " + result);

  return result;
};

console.log("Detonate maximum bombs");
console.log(
  maximumDetonation([
    [2, 1, 3],
    [6, 1, 4],
  ])
); // result: 2
console.log(
  maximumDetonation([
    [1, 1, 5],
    [10, 10, 5],
  ])
); // result: 1
