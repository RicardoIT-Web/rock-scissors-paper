/**
 * Define fix statements containing the content that do not change
 */

const playerSelectionDisplay = document.getElementById("player-selection");
const computerSelectionDisplay = document.getElementById("computer-selection");
const resultsDisplay = document.getElementById("result");
const availableSelections = document.querySelectorAll("button");

let playerSelection
let computerSelection


/**
 * add a click eventlistener to the available clickable options
 */

availableSelections.forEach(button => {
    button.addEventListener("click", (event) => {
    playerSelection = event.target.id
    playerSelectionDisplay.innerHTML = playerSelection
    generateComputerSelection()
    getResult()
    changeImg()
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
        result = "Computer Won!"
    }
    else if (computerSelection === "Scissors" && playerSelection ==="Paper") {
        result = "Computer Won!"
    }
    else if (computerSelection === "Scissors" && playerSelection ==="Rock") {
        result = "You Win!"
    }
    else if (computerSelection === "Paper" && playerSelection ==="Scissors") {
        result = "You Win!"
    }
    else if (computerSelection === "Paper" && playerSelection ==="Rock") {
        result = "Computer Won!"
    }

    resultsDisplay.innerHTML = result

}