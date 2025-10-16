function getComputerChoice() {
	const rand = Math.floor(Math.random() * 3);
	switch (rand) {
		case 0: return 'rock'
		case 1: return 'paper'
		case 2: return 'scissors'
	}
}

function getHumanChoice() {
	let usrChoice = prompt("Rock, Paper or Scissors?");
	return usrChoice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());
