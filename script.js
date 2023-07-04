/* 
Make Rock, Paper, Scissors Game.
Player takes turns against computer, choosing "Rock, Paper or Scissors"
Computers chooses randomly.
Paper beats Rock.
Rock beats Scissors.
Scissors beats Paper.
Selections are case insensitive.
Best out of five wins.

 */
const weapons = ["rock", "paper", "scissors"];
function getComputerChoice() {
  return weapons[Math.floor(Math.random() * weapons.length)];
}
getComputerChoice(weapons);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "You Tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
