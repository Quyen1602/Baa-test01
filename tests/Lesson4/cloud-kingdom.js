//Cach 1
const playerName = "Mario";
let currentLives = 3;

const coins = {
  level1: 25,
  level2: 30,
  level3: 45
};

const values = Object.values(coins);
const totalCoins = values.reduce((a, b) => a + b, 0);
const averageCoins = totalCoins / values.length;
const remainingCoins = totalCoins % values.length;

console.log({ playerName, currentLives, totalCoins, averageCoins, remainingCoins });

// //Cach 2
// const playerName = "Mario";
// let currentLives = 3;

// const coins = [25, 30, 45];
// const totalCoins = coins.reduce((s, c) => s + c, 0);

// console.log({
//   playerName,
//   currentLives,
//   totalCoins,
//   averageCoins: totalCoins / coins.length,
//   remainingCoins: totalCoins % coins.length
// });

