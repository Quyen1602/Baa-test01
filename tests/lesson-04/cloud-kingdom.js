// //cach 1
// const powerUp = "mushroom";

// const effects = {
//   mushroom: "Mario becomes Super!",
//   flower: "Mario can shoot fireballs!",
//   star: "Mario is invincible!",
//   none: "Mario is normal"
// };

// const effect = effects[powerUp] || "Unknown power-up";

// console.log(effect);


// //cach 2
// function getPowerUpEffect(powerUp) {
//   const effects = {
//     mushroom: "Mario becomes Super!",
//     flower: "Mario can shoot fireballs!",
//     star: "Mario is invincible!",
//     none: "Mario is normal"
//   };

//   return effects[powerUp] || "Unknown power-up";
// }

// const powerUp = "mushroom";
// console.log(getPowerUpEffect(powerUp));

// //cach 3
const powerUp = "mushroom";
let effect;

switch (powerUp) {
  case "mushroom":
    effect = "Mario becomes Super!";
    break;
  case "flower":
    effect = "Mario can shoot fireballs!";
    break;
  case "star":
    effect = "Mario is invincible!";
    break;
  case "none":
    effect = "Mario is normal";
    break;
  default:
    effect = "Unknown power-up";
}

console.log(effect);
