const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3);
  switch (rand) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let usrChoice = prompt("Rock, Paper or Scissors?");
  return usrChoice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
		
    if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock.");
      humanScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats Rock.");
      computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beat Paper.");
      humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors beat Paper.");
      computerScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beat Scissors.");
      humanScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beat Scissors.");
      computerScore += 1;
    } else {
      console.log("Draw.");
    }
  }
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
  playRound(humanSelection, computerSelection);
}

playGame();
