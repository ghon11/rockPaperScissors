let playerScore = 0;
let computerScore = 0;
game();

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    if (randomInt == 0) {
        return 'ROCK';
    }
    else if (randomInt == 1) {
        return 'PAPER';
    }
    else if (randomInt == 2) {
        return 'SCISSORS';
    }
    else {
        return 'SOMETHING WENT WRONG.'
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'ROCK') {
        if (computerSelection == 'ROCK') {
            console.log(`It's a draw! ${playerSelection} ties with ${computerSelection}`);
        }
        else if (computerSelection == 'SCISSORS') {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return playerScore +=1;
        }
        else if (computerSelection == 'PAPER') {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return computerScore +=1;
        }
    }
    else if (playerSelection == 'PAPER') {
        if (computerSelection == 'PAPER') {
            console.log(`It's a draw! ${playerSelection} ties with ${computerSelection}`);
        }
        else if (computerSelection == 'ROCK') {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return playerScore +=1;
        }
        else if (computerSelection == 'SCISSORS') {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return computerScore +=1;
        }
    }
    else if (playerSelection == 'SCISSORS') {
        if (computerSelection == 'SCISSORS') {
            console.log(`It's a draw! ${playerSelection} ties with ${computerSelection}`);
        }
        else if (computerSelection == 'PAPER') {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return playerScore +=1;
        }
        else if (computerSelection == 'ROCK') {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return computerScore +=1;
        }
    }
}


// Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// Remember loops? This is a great opportunity to use one to play those five rounds:
function game() {
    let playerSelection = "";
    let computerSelection = "";
    for (let i = 1; i <= 5; i++) {
        playerSelection = (prompt("Make your choice: ")).toUpperCase();
        computerSelection = getComputerChoice();
        console.log(`Round: ${i} \n You Chose: ${playerSelection} \n Computer Chose: ${computerSelection}`);
        playRound(playerSelection, computerSelection);
     }
    if (playerScore > computerScore) {
        console.log(`You Won! ${playerScore} games to ${computerScore}`);
    }
    else if (computerScore > playerScore) {
        console.log(`You Lost! ${playerScore} games to ${computerScore}`);
    }
}

// At this point you should be using console.log() to display the results of each round and the winner at the end.
// Use prompt() to get input from the user. Read the docs here if you need to.
// Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
// Feel free to create more “helper” functions if you think it would be useful.