

//take choice
let playerChoice = parseInt(prompt("Please choose a number between 1 and 3 (1:rock, 2:paper, 3:scissors"));
let comChoice = Math.floor(Math.random()*3) + 1;

if(playerChoice === comChoice){
    console.log("You both picked the same, it's a tie!")
}else if((playerChoice === 1 && comChoice === 3) || (playerChoice === 2 && comChoice === 1) || (playerChoice === 3 && comChoice === 2)){
    console.log("You win!");
}else if((comChoice === 1 && playerChoice === 3) || (comChoice === 2 && playerChoice === 1) || (comChoice === 3 && playerChoice === 2)){

}else{
    console.log("Something went wrong")
}