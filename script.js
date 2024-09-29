

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()* choices.length);

    return[randomIndex];
}

console.log(getComputerChoice());

//Write the logic to get the human choice
function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"];
    let userInput = prompt("Please enter rock, paper, or scissors:").toLowerCase();

    while (!choices.includes(userInput)) {
        userInput = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return userInput;
}

// Example usage:
console.log(getHumanChoice());

//declare player score variables
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Convert humanChoice to lowercase to make it case-insensitive
    humanChoice = humanChoice.toLowerCase();

    // Define the possible choices
    const choices = ["rock", "paper", "scissors"];

    // Check if the humanChoice is valid
    if (!choices.includes(humanChoice)) {
        console.log("Invalid choice! Please choose rock, paper, or scissors.");
        return;
    }

    // Determine the winner
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        computerScore++;
    }

    // Display the current scores
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
}

// Example usage:
playRound("rock", "scissors"); // You win! Rock beats Scissors.
playRound("ROCK", "paper");    // You lose! Paper beats Rock.