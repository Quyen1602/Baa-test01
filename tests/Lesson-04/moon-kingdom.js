function createCharacters() {
  // array
  const characters = [
    { name: "Mario", level: 10, health: 300 },
    { name: "Luigi", level: 8, health: 400 },
    { name: "Peach", level: 12, health: 500 },
    { name: "Bowser", level: 15, health: 600 }
  ];

  // Power up bằng map
  const charactersPowerUp = characters.map(character => {
    return {
      name: character.name.toUpperCase(),
      level: character.level * 2,
      health: character.health * 3
    };
  });

  // fillter health > 1000
  const possibleWinners = charactersPowerUp.filter(
    character => character.health > 1000
  );

  return {
    characters,
    charactersPowerUp,
    possibleWinners
  };
}

function printLeaderboard(players) {
  const player = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 900 },
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 800},
    { name: "Phong", score: 500 }
  ];

    // sort điểm từ cao đến thấp
    const sortedPlayers = players.sort((a, b) => b.score - a.score);

  console.log("LEADERBOARD TOP 3");

  sortedPlayers.forEach((player, index) => {
    let medal = "";

    if (index === 0) medal = "vàng";
    else if (index === 1) medal = "đồng";
    else if (index === 2) medal = "bạc";

    console.log(
      `${medal} ${index + 1}. ${player.name} - ${player.score}`
    );
  });
}
