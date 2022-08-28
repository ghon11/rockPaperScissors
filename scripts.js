let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#Rock');
rock.addEventListener('click', () => {
    playerSelection = 'ROCK';
    playRound(playerSelection, getComputerChoice());
})

const paper = document.querySelector('#Paper');
paper.addEventListener('click', () => {
    playerSelection = 'PAPER';
    playRound(playerSelection, getComputerChoice());
})

const scissors = document.querySelector('#Scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'SCISSORS';
    playRound(playerSelection, getComputerChoice());
})

function writeScore() {
    const container = document.querySelector('#score');
    container.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
}

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
            writeDraw(playerSelection, computerSelection);
        }
        else if (computerSelection == 'SCISSORS') {
            writeWin(playerSelection, computerSelection);
        }
        else if (computerSelection == 'PAPER') {
            writeLose(playerSelection, computerSelection);
        }
    }
    else if (playerSelection == 'PAPER') {
        if (computerSelection == 'PAPER') {
            writeDraw(playerSelection, computerSelection);
        }
        else if (computerSelection == 'ROCK') {
            writeWin(playerSelection, computerSelection);
        }
        else if (computerSelection == 'SCISSORS') {
            writeLose(playerSelection, computerSelection);
        }
    }
    else if (playerSelection == 'SCISSORS') {
        if (computerSelection == 'SCISSORS') {
            writeDraw(playerSelection, computerSelection);
        }
        else if (computerSelection == 'PAPER') {
            writeWin(playerSelection, computerSelection);
        }
        else if (computerSelection == 'ROCK') {
            writeLose(playerSelection, computerSelection);
        }
    }
}

function writeWin(playerSelection, computerSelection) {
    const container = document.querySelector('#result');
    container.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore += 1;
    writeScore(playerScore, computerScore);
    checkGameEnd(playerScore, computerScore);
}

function writeLose(playerSelection, computerSelection) {
    const container = document.querySelector('#result');
    container.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore += 1;
    writeScore(playerScore, computerScore);
    checkGameEnd(playerScore, computerScore);
}

function writeDraw(playerSelection, computerSelection) {
    const container = document.querySelector('#result');
    container.textContent = `It's a draw! ${playerSelection} ties with ${computerSelection}`;
}

function checkGameEnd(playerScore, computerScore) {
    const container = document.querySelector('#result');
    if (playerScore == 5) {
        container.textContent = `The player has won ${playerScore} games to ${computerScore}`;
    }
    else if (computerScore == 5) {
        container.textContent = `The player has Lost ${computerScore} games to ${playerScore}`;
    }
}