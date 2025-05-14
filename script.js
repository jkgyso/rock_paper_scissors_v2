console.log('Hello World!');

function getHumanChoice() {
    let humanChoice = prompt('Please enter one of the choices: Rock, Paper, or Scissors:');

    return humanChoice;
}

console.log(`Human Choice: ${getHumanChoice()}`);


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return 'Rock';
    } else if(randomNumber === 2) {
        return 'Paper';
    } else {
        return 'Scissors'
    }
}

console.log(`Computer Choice: ${getComputerChoice()}`);



function playGame() {
    let humanScore = 0;
    let computerScore = 0;  
    

    function playRound(humanChoice, computerChoice) {
    if(humanChoice.toLowerCase() == 'rock' && computerChoice == 'rock') {
        console.log(`It's a tie! No one wins.`);
    } else if(humanChoice.toLowerCase() == 'rock' && computerChoice == 'paper') {
        computerScore++;
        console.log(`You lose! Paper beats Rock.`);
    } else if(humanChoice.toLowerCase() == 'rock' && computerChoice == 'scissors') {
        humanScore++;
        console.log(`You win! Rock beats Scissors.`);
    } else if(humanChoice.toLowerCase() == 'paper' && computerChoice == 'paper') {
        console.log(`It's a tie! No one wins.`);
    } else if(humanChoice.toLowerCase() == 'paper' && computerChoice == 'rock') {
        humanScore++;
        console.log(`You win! Paper beats Rock.`);
    } else if(humanChoice.toLowerCase() == 'paper' && computerChoice == 'scissors') {
        computerScore++;
        console.log(`You lose! Scissors beat Paper.`);
    } else if(humanChoice.toLowerCase() == 'scissors' && computerChoice == 'scissors') {
        console.log(`It's a tie! No one wins.`);
    } else if(humanChoice.toLowerCase() == 'scissors' && computerChoice == 'rock') {
        computerScore++;
        console.log(`You lose! Rock beats Scissors`);
    } else if(humanChoice.toLowerCase() == 'scissors' && computerChoice == 'paper') {
        humanScore++
        console.log(`You win! Scissors beat Paper.`);
    }
}
if(humanScore == 5) {
    console.log('You win!')
} else if(computerScore == 5) {
    console.log('Computer Wins!');
}

}

playGame();

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);
playRound(humanSelection, computerSelection);