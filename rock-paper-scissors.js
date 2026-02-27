

function getComputerChoice(){
    let comChoice = Math.floor(Math.random()*3) + 1;
    if(comChoice===1){
        return "Rock";
    }else if(comChoice===2){
        return "Paper";
    }else if(comChoice===3){
        return "Scissors";
    }else{
        return null;
    }
}

function getHumanChoice(){
    let playerChoice = parseInt(prompt("Please choose a number between 1 and 3 (1:rock, 2:paper, 3:scissors"));
        if(playerChoice===1){
        return "Rock";
    }else if(playerChoice===2){
        return "Paper";
    }else if(playerChoice===3){
        return "Scissors";
    }else{
        return null;
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("You both picked the same, it's a tie!")
    }else if((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")){
        console.log("You win!");
        humanScore++
    }else if((computerChoice === "Rock" && humanChoice === "Scissors") || (computerChoice === "Paper" && humanChoice === "Rock") || (computerChoice === "Scissors" && humanChoice === "Paper")){
        console.log("You Lose.");
        computerScore++;
    }else{
        console.log("Something went wrong");
    }
}

let humanScore = 0;
let computerScore = 0;


function playGame(){
    humanScore = 0;
    computerScore = 0;
    for(let i = 0; i<5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection,computerSelection)
    }

    if(humanScore>computerScore){
        console.log("You won the game!")
    }else if(humanScore<computerScore){
        console.log("You lost the game!")
    }else{
        console.log("something went wrong.")
    }
}

playGame();