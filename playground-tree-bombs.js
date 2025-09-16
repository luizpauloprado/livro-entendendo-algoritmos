// https://leetcode.com/problems/detonate-the-maximum-bombs/description/
// bombs[i] = [xi, yi, ri]
// X-coordinate, Y-coordinate, radius

// My code
// time: O(n^2)
// space: O(n)
var maximumDetonation = function (bombs) {
  let toDetonate = [...bombs];
  let results = [];

  while (toDetonate.length > 0) {
    const [x, y, r] = toDetonate.pop();
    const rx = [x - r, x + r];
    const ry = [y - r, y + r];

    let counter = 0;
    let numberOfExplosions = 0;
    while (counter < bombs.length) {
      const [bombX, bombY, bombR] = bombs[counter];
      // square
      const insideRx = bombX >= rx[0] && bombX <= rx[1];
      const insideRy = bombY >= ry[0] && bombY <= ry[1];
      const isInside = insideRx && insideRy;
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

  return Math.max(...results);
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
