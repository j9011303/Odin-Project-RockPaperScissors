let playerScore = 0;
let computerScore = 0;
let roundNum = 1;

/*--設定玩家按鈕名稱--*/
const allBtn = document.querySelectorAll('.btn');

const rockButton = document.querySelector('.user-rock');
const paperButton = document.querySelector('.user-paper');
const scissorsButton = document.querySelector('.user-scissors');

/*電腦案件 */
const btnUser = document.querySelectorAll('.btn-user');
const computerRock = document.querySelector('.computer-rock');
const computerPaper = document.querySelector('.computer-paper');
const computerScissors = document.querySelector('.computer-scissors');

/*分數系列*/
const userScore = document.querySelector('.user-score');
const thecomputerScore = document.querySelector('.computer-score');

/*-------------顯示結果的區塊-------------*/
const resultContainer = document.querySelector('.result-container');

let resultsArray = [];
function gameLog() {
    var p = document.createElement('h2');
    p.classList.add('round-result');
    p.textContent = resultsArray[`${resultsArray.length -1}`];
    resultContainer.insertAdjacentElement('afterbegin',p);
}

/*--- Setting the new game bottom -----*/
const newGame = document.createElement('div');
newGame.textContent = `Play again`;
newGame.classList.add('endbtn', 'refresh');

//重新導入頁面
function refreshPage() {
    window.location.reload(true);
}


/*-------Set the Computer----- */

function computerPlay() {
    const result = Math.floor(Math.random() * Math.floor(3));
    if (result === 0){
        computerRock.classList.add('btn-pick');
        return ("rock");
    }else if (result === 1){
        computerPaper.classList.add('btn-pick');
        return  ("paper");
    }else{
        computerScissors.classList.add('btn-pick');
        return ("scissors");
    }
}

//移除特效
function removeColor(){
    allBtn.forEach(btn => btn.classList.remove('btn-pick'));
}

function endGame(){
    userBtn.forEach(btn => btn.classList.remove('btn-user'));
}



function playGame(playerSelection, computerSelection) {
    playerSelection = this.dataset.button;
    removeColor();
    computerSelection = computerPlay();
    this.classList.add('btn-pick');
        if (playerSelection === computerSelection) {
            resultsArray.push(`Round #${roundNum}: Tie! ${playerSelection} to ${computerSelection}. Score: ${playerScore} - ${computerScore}.`);
        }else if (                
            (playerSelection == 'paper' && computerSelection == "rock") 
        || (playerSelection == 'scissors' && computerSelection == 'paper')
        || (playerSelection == "rock" && computerSelection == "scissors")
        ){
            playerScore++;
            resultsArray.push(`Round #${roundNum}: You Win!  ${playerSelection} beats ${computerSelection}. Score: ${playerScore} - ${computerScore}.`);
        }else {
            computerScore++;
            resultsArray.push(`Round #${roundNum}: You Lose! ${computerSelection} beats ${playerSelection}. Score: ${playerScore} - ${computerScore}.`);
        }
        roundNum++;

        if ( playerScore >= 5) {
            resultsArray.push(`YOU WON! You got 5 points! Round #${roundNum}: ${playerSelection} beats ${computerSelection}.`);
            userBtn.forEach(btn => btn.removeEventListener('click',playGame,endGame()));
            resultContainer.insertAdjacentElement('beforebegin',newGame)
        }else if (computerScore >= 5) {
            resultsArray.push(`YOU LOSE! You got 5 points! Round #${roundNum}: ${playerSelection} beats ${computerSelection}.`);
            userBtn.forEach(btn => btn.removeEventListener('click',playGame,endGame()));
            resultContainer.insertAdjacentElement('beforebegin',newGame)
        }
    userScore.innerHTML = playerScore;
    thecomputerScore.innerHTML = computerScore;
    gameLog();
}


const userBtn = document.querySelectorAll('.btn-user');
userBtn.forEach(btn => btn.addEventListener('click', playGame));
userBtn.forEach(btn => btn.addEventListener('transitionend', removeColor));

newGame.addEventListener('click',refreshPage);