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
let weapons = ["rock", "paper", "scissors"];
function getComputerChoice() {
  return weapons[Math.floor(Math.random() * weapons.length)];
  console.log(getComputerChoice);
}
getComputerChoice(weapons);
