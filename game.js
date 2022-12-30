function getComputerChoice() {
  const symbols = ["Rock", "Paper", "Scissors"];
  const index = Math.floor(Math.random() * symbols.length);

  return symbols[index];
}

function playRound(playerSelection, computerSelection) {
  const dict = {
    rock: ["scissors", "rock", "paper"],
    paper: ["rock", "paper", "scissors"],
    scissors: ["paper", "scissors", "rock"],
  };

  const player =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  const computer =
    computerSelection[0].toUpperCase() +
    computerSelection.slice(1).toLowerCase();

  const index = dict[playerSelection.toLowerCase()].indexOf(
    computerSelection.toLowerCase()
  );
  switch (index) {
    case 0:
      return `You Win! ${player} beats ${computer}`;
    case 1:
      return `Draw!`;
    case 2:
      return `You Lose! ${computer} beats ${player}`;
    default:
      return "Unknown";
  }
}

function game() {
  const symbols = {
    r: "Rock",
    p: "Paper",
    s: "Scissors",
  };

  for (let i = 0; i < 5; i++) {
    const playerChoice = prompt("Your choice: [R]ock | [P]aper | [S]icssors");
    if (!playerChoice) {
      console.log("Invalid input!");
    } else if (!symbols.hasOwnProperty(playerChoice.toLocaleLowerCase())) {
      console.log("Invalid input!");
    } else {
      const computerSelection = getComputerChoice();
      const result = playRound(
        symbols[playerChoice.toLocaleLowerCase()],
        computerSelection
      );
      console.log(result);
    }
  }
}

game();
