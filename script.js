console.log('Hello World!');

const buttonChoices = document.querySelector('#choices');
const playerChoice = document.querySelector('#output');
const computerChoice = document.querySelector('#computer-output')
;
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const roundResult = document.querySelector('#round-result');
const winner = document.querySelector('#winner');
const round = document.querySelector('#round');

function getPlayerChoice(event) {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            playerChoice.textContent = `Rock`;
            break;
        case 'paper': 
            playerChoice.textContent = `Paper`;
            break;
        case 'scissors':
            playerChoice.textContent = `Scissors`;
            break;
    }

    return playerChoice.textContent;
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch(randomNumber) {
        case 1: 
            computerChoice.textContent = 'Rock'
            break;
        case 2:
            computerChoice.textContent = 'Paper';
            break;
        case 3:
            computerChoice.textContent = 'Scissors';
            break;
    }

    return computerChoice.textContent;
}

let pScore = 0; 
let cScore = 0; 
let currentRound = 0;
const maxRounds = 5;


function playRound(player, computer) {
    

        const playerPick = player.toLowerCase();
        const computerPick = computer.toLowerCase();

    //  Tie Round 
        if(playerPick == computerPick) {

            roundResult.textContent = `It's a tie! No one wins`
        
        //Human wins 
        } else if(playerPick == 'rock' && computerPick == 'scissors' || playerPick == 'paper' && computerPick == 'rock' || playerPick == 'scissors' && computerPick == 'paper') {
            
            pScore++;
            roundResult.textContent = `You win! ${player} beats ${computer}`
            
        // Computer wins
        } else {
         
            cScore++;  
            roundResult.textContent = `You lose! ${computer} beats ${player}`
            
        }

            playerScore.textContent = `${pScore}`; 
            computerScore.textContent = `${cScore}`;

        currentRound++;
        round.textContent = `${currentRound}`
        console.log(currentRound);

        if(currentRound === 5) {
            endGame();
        }

}

function endGame() {

    const playAgain = document.createElement('button');
    const results = document.querySelector('#results');
    const buttons = document.querySelectorAll('.choice');
    
    if(pScore > cScore) {
        winner.textContent = `Winner: Player wins the game!`;
    } else if(pScore < cScore) {
        winner.textContent = `Winner: Computer wins the game!`
    } else {
        winner.textContent = `No winner. It's a tie!`
    }

    buttons.forEach(button => button.disabled = true);

    playAgain.textContent = 'Play Again!';
    results.appendChild(playAgain);

    playAgain.addEventListener('click', () => {
        pScore = 0; 
        cScore = 0; 
        currentRound = 0;

        playAgain.style.display = 'none';
        winner.textContent = '';
        roundResult.textContent = '';
        playerChoice.textContent = '';
        computerChoice.textContent = '';
        playerScore.textContent = '';
        computerScore.textContent = '';
        round.textContent = '1';

        buttons.forEach(button => button.disabled = false);
    })

}



buttonChoices.addEventListener('click', getPlayerChoice);
buttonChoices.addEventListener('click', getComputerChoice);
buttonChoices.addEventListener('click', event => {
    const result1 = getPlayerChoice(event);
    const result2 = getComputerChoice();

    playRound(result1, result2);

})
    




