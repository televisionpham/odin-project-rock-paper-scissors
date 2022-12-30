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

  const code = dict[playerSelection.toLowerCase()].indexOf(
    computerSelection.toLowerCase()
  );

  switch (code) {
    case 0:
      return {
        code,
        message: `You Win! ${player} beats ${computer}`,
      };
    case 1:
      return {
        code,
        message: `Draw!`,
      };
    case 2:
      return {
        code,
        message: `You Lose! ${computer} beats ${player}`,
      };
    default:
      return null;
  }
}

function game(playerChoice) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerChoice, computerSelection);
  return result;
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = game(button.id);
    const backgroundColors = [
      "background-color: green",
      "background-color: yellow",
      "background-color: red",
    ];
    const resultDiv = document.querySelector("#result");
    const resultContainer = document.querySelector("#result-container");
    resultDiv.textContent = result.message;
    resultContainer.style[backgroundColors[result.code]];
  });
});
