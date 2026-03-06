

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {

    playerPick.textContent = `You selected: ${humanChoice}`;
    comPick.textContent = `Computer selected: ${computerChoice}`;

    if (humanChoice === computerChoice) {
        result.textContent = "You both picked the same, it's a tie!";
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")) {
        result.textContent = "You win!";
        humanScore++
    } else if ((computerChoice === "Rock" && humanChoice === "Scissors") || (computerChoice === "Paper" && humanChoice === "Rock") || (computerChoice === "Scissors" && humanChoice === "Paper")) {
        result.textContent = "You Lose.";
        computerScore++;
    } else {
        result.textContent = "Something went wrong";
    }
}

let humanScore = 0;
let computerScore = 0;
let round = 0;

const playerPick = document.querySelector("#playerPick");
const comPick = document.querySelector("#comPick");
const result = document.querySelector("#result");
const winner = document.querySelector("#winner");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (round >= 5) return;

        const humanSelection = button.textContent;
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        round++;

        if (round === 5) {
            if (humanScore > computerScore) {
                winner.textContent = "You won the game!";
            } else if (humanScore < computerScore) {
                winner.textContent = "You lost the game!";
            } else {
                winner.textContent = "It's a tie!";
            }
        }
    });
});