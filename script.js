console.log('Hello World!');

function getHumanChoice() {
    let humanChoice = prompt('Please enter one of the choices: Rock, Paper, or Scissors:');

    console.log(`Human Choice: ${humanChoice}`)
    return humanChoice;
}


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    if (randomNumber === 1) {
        computerChoice = 'Rock';
    } else if(randomNumber === 2) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }

    console.log(`Computer Choice: ${computerChoice}`);
    return computerChoice;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;  
    

    function playRound(humanChoiceFunc, computerChoiceFunc) {
        
        let humanSelection = humanChoiceFunc();
        let computerSelection = computerChoiceFunc();

        const humanChoice = humanSelection ? humanSelection.toLowerCase() : '';
        const computerChoice = computerSelection ? computerSelection.toLowerCase() : '';

        if(humanChoice == computerChoice) {
            console.log(`It's a tie! No one wins.`);
            console.log(`Human Score: ${humanScore}; Computer Score: ${computerScore}`)
            return `It's a tie! No one wins.`
        } else if(humanChoice == 'rock' && computerChoice == 'scissors' || humanChoice == 'paper' && computerChoice == 'rock' || humanChoice == 'scissors' && computerChoice == 'paper') {
            humanScore++;
            
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            console.log(`Human Score: ${humanScore}; Computer Score: ${computerScore}`)
            return `You win! ${humanChoice} beats ${computerChoice}`
        } else {
         computerScore++  
         console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
         console.log(`Human Score: ${humanScore}; Computer Score: ${computerScore}`)
        return `You lose! ${computerChoice} beats ${humanChoice}`
        }

        }


playRound(getHumanChoice, getComputerChoice);
playRound(getHumanChoice, getComputerChoice);
playRound(getHumanChoice, getComputerChoice);
playRound(getHumanChoice, getComputerChoice);
playRound(getHumanChoice, getComputerChoice);


if(humanScore > computerScore) {
    return 'You won the game!';
} else if(humanScore < computerScore) {
    return 'Computer won the game!';
} else {
    return `It's a tie game!`;
}

}

console.log(playGame());


