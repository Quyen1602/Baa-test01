// Player info
let playerName = "Mario";
let currentLives = 3;

const coins = [25, 30, 45];

const total = coins.reduce((sum, coin) => sum + coin, 0);

console.log({
  total,
  average: total / coins.length,
  remainder: total % coins.length
});