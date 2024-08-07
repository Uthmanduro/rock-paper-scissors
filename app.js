const options = ["rock", "paper", "scissors"];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getComputerChoice = () => {
    const guess = getRandomNumber(1, 9)

    if (guess >= 1 && guess <= 3) {
      return "rock";
    }
    
    if (guess >= 4 && guess <= 6) {
        return "paper";
    }
    
    if (guess >= 7 && guess <= 9) {
      return "scissors"
    }
}

const getHumanChoice = () => {
    const guess = prompt("Enter your choice between 'rock', 'paper', 'scissors'").toLowerCase();

    if (guess === "rock") {
      return "rock";
    }
    
    if (guess === "paper") {
        return "paper";
    }
    
    if (guess === "scissors") {
      return "scissors"
    }
}

const getRockAndPaperChoice = (computerChoice, humanChoice) => {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win!");
        humanScore += 1;
    }
};

const getScissorsAndPaperChoice = (computerChoice, humanChoice) => {
    if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win!");
        humanScore += 1
    }
};

const getScissorsAndRockChoice = (computerChoice, humanChoice) => {
    if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore += 1; 
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win!");
        humanScore += 1;
    }
};


let humanScore = 0;
let computerScore = 0;



const playRound = (computerSelection, humanSelection) => {
    if (computerSelection === humanSelection) {
        console.log("It's a Tie!")
    }
    getRockAndPaperChoice(computerSelection, humanSelection);
    getScissorsAndPaperChoice(computerSelection, humanSelection);
    getScissorsAndRockChoice(computerSelection, humanSelection);
}


const playGame = () => {
    for (let counter = 0; counter < 5; counter++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(humanSelection, computerSelection);
        playRound(computerSelection, humanSelection);
    }
    console.log(`Human Score: ${humanScore} computer Score: ${computerScore}`)
}

playGame();