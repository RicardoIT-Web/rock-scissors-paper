/**
 * Define fixed statements containing contents that do not change
 */

const playerSelectionDisplay = document.getElementById("player-selection");
const computerSelectionDisplay = document.getElementById("computer-selection");
const resultsDisplay = document.getElementById("result");
const availableSelections = document.querySelectorAll("input");
const playerScoreDisplay = document.getElementById("pScore");
const computerScoreDisplay = document.getElementById("cScore");
const drawScoreDisplay = document.getElementById("dScore");


let playerSelection
let computerSelection
let result

/**
 * add a click eventlistener to the available clickable options and trigger functions
 */

availableSelections.forEach(input => {
    input.addEventListener("click", (event) => {
    playerSelection = event.target.name
    playerSelectionDisplay.innerHTML = playerSelection
    generateComputerSelection()
    getResult()
    trackScore()
    })
})

/**
 * function to generate comupter selections
 */

function generateComputerSelection() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerSelection = "Rock"
    }
    else if (randomNumber === 2) {
        computerSelection = "Scissors"
    }
    else if (randomNumber === 3) {
        computerSelection = "Paper"
    }

    computerSelectionDisplay.innerHTML = computerSelection
}

function getResult() {
    if (computerSelection === playerSelection) {
        result = "Its a Draw!"
    }
    else if (computerSelection === "Rock" && playerSelection ==="Paper") {
        result = "You Win!"
    }
    else if (computerSelection === "Rock" && playerSelection ==="Scissors") {
        result = "Computer Wins!"
    }
    else if (computerSelection === "Scissors" && playerSelection ==="Paper") {
        result = "Computer Wins!"
    }
    else if (computerSelection === "Scissors" && playerSelection ==="Rock") {
        result = "You Win!"
    }
    else if (computerSelection === "Paper" && playerSelection ==="Scissors") {
        result = "You Win!"
    }
    else if (computerSelection === "Paper" && playerSelection ==="Rock") {
        result = "Computer Wins!"
    }

    resultsDisplay.innerHTML = result
}

function incrementDrawScore() {
    // increments draw score

    let currentDrawScore = parseInt(drawScoreDisplay.innerHTML)
    let newDrawScore = currentDrawScore +1
    drawScoreDisplay.innerHTML = newDrawScore
}

function incrementPlayerScore() {
    // increments player score
    let currentPlayerScore = parseInt(playerScoreDisplay.innerHTML) 
    let newPlayerScore = currentPlayerScore +1
    playerScoreDisplay.innerHTML = newPlayerScore
}

function incrementComputerScore() {
    //increments Computer Score
    let currentComputerScore = parseInt(computerScoreDisplay.innerHTML) 
    let newComputerScore = currentComputerScore +1
    computerScoreDisplay.innerHTML = newComputerScore
}


function trackScore() {

    let gameResult = resultsDisplay.innerHTML
    if (gameResult === "Its a Draw!") {
        incrementDrawScore()
    } else if (gameResult === "You Win!") {
        incrementPlayerScore()
    } else if (gameResult === "Computer Wins!") {
        incrementComputerScore()
    }
}

