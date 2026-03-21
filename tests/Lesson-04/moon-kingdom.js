const createCharacters = () => {
  const characters = [
    { name: "Mario", level: 10, health: 300 },
    { name: "Luigi", level: 8, health: 400 },
    { name: "Peach", level: 12, health: 250 },
    { name: "Bowser", level: 15, health: 500 }
  ];

  const charactersPowerUp = characters.map(c => ({
    name: c.name.toUpperCase(),
    level: c.level * 2,
    health: c.health * 3
  }));

  return {
    charactersPowerUp,
    possibleWinners: charactersPowerUp.filter(c => c.health > 1000)
  };
};

console.log(createCharacters());

function printLeaderboard() {
  // 1. Khai báo players bên trong function
  const players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 900 },
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 800 },
    { name: "Phong", score: 500 }
  ];

  // 2. Sắp xếp + in kết quả
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  sortedPlayers.forEach((player, index) => {
    let medal = "";

    if (index === 0) medal = "🥇 ";
    else if (index === 1) medal = "🥈 ";
    else if (index === 2) medal = "🥉 ";

    console.log(`${medal}${index + 1}. ${player.name} - ${player.score}`);
  });
}

// Gọi hàm
printLeaderboard();

