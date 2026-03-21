const powerUp = "mushroom";

const effects = {
  mushroom: "Mario becomes Super!",
  flower: "Mario can shoot fireballs!",
  star: "Mario is invincible!",
  none: "Mario is normal"
};

console.log(effects[powerUp] || "Unknown power-up");