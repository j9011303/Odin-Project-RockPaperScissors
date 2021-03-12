let playerScore = 0;
let computerScore = 0;

/*-------Set the playround----- */

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
         return `Tie!  You :   "${playerSelection}"    Computer :  "${computerSelection}"   Score : ${playerScore} to ${computerScore}`
     } else if (
                (playerSelection == 'PAPER' && computerSelection == "ROCK") 
            || (playerSelection == 'SCISSORS' && computerSelection == 'PAPPER')
            || (playerSelection == "ROCK" && computerSelection == "SCISSORS")
            ){
                playerScore++;
                return `You Win!  You :  "${playerSelection}"   Computer : "${computerSelection}"   Score : ${playerScore} to ${computerScore}`
            }
    else{
        computerScore++;
        return `You Lost!  You :  "${playerSelection}"    Computer : "${computerSelection}"   Score : ${playerScore} to ${computerScore}`
    }
}

/*-------Set the Computer----- */

function computerPlay() {
    const result = Math.floor(Math.random() * Math.floor(3));
    if (result === 0){
        return ("ROCK");
    }else if (result === 1){
        return  ("PAPER");
    }else{
        return ("SCISSORS");
    }
}

/*-------Set the user---------*/

function player() {
   let result = prompt("Type Rock, Paper , Scissors");
   let upperResult = result.toUpperCase();
    if (upperResult == "ROCK"){
        return ('ROCK');
    }else if (upperResult == "PAPER"){
        return ('PAPER');
    }else if (upperResult == "SCISSORS"){
        return ('SCISSORS');
    }else{
        player();
    }
}

/*------Set the game time------*/

function game(){
    for (let i = 0; i < 5 ; i++){
       let computerSelection = computerPlay()
       let playerSelection = player();
       console.log(playRound(playerSelection,computerSelection));
    }
    if (playerScore == computerScore){
        console.log(`You tied. Final Score: ${playerScore} to ${computerScore}`);
    }else if (playerScore > computerScore){
        console.log(`You're the winner! Final Score: ${playerScore} to ${computerScore}`);
    }else{
        console.log(`You're the loser. Final Score: ${playerScore} to ${computerScore}`);
    }
}


game();