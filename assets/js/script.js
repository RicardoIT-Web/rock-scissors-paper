/**
 * Define fixed statements containing contents that do not change
 */

const PLAYER_SELECTION_DISPLAY = "player-selection";
const COMPUTER_SELECTION_DISPLAY = "computer-selection";
const RESULT_DISPLAY = "result";
const AVAILABLE_SELECTIONS = document.querySelectorAll("input");
const playerScoreDisplay = document.getElementById("pScore");
const computerScoreDisplay = document.getElementById("cScore");
const drawScoreDisplay = document.getElementById("dScore");

let playerSelection = null;
let computerSelection = null;
let result = null;
let isGameStarted = false;

/**
 * model pop-ups
 */
const modal_box = document.getElementById("modal_box");

/**
 * function to generate comupter selections
 */

function generateComputerSelection() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerSelection = "Rock";
    } else if (randomNumber === 2) {
        computerSelection = "Scissors";
    } else if (randomNumber === 3) {
        computerSelection = "Paper";
    }

    document.getElementById(COMPUTER_SELECTION_DISPLAY).innerHTML = computerSelection;
}

/**
 * function to assess and display results
 */

function getResult() {
    isGameStarted = true;
    if (computerSelection === playerSelection) {
        result = "Its a Draw!";
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        result = "You Win!";
    } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        result = "Computer Wins!";
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        result = "Computer Wins!";
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        result = "You Win!";
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        result = "You Win!";
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        result = "Computer Wins!";
    }

    document.getElementById(RESULT_DISPLAY).innerHTML = result;
}

/**
 * function to monitor the scores and trigger score increment functions
 */

function trackScore() {

    let gameResult = result;
    if (gameResult === "Its a Draw!") {
        incrementDrawScore();
    } else if (gameResult === "You Win!") {
        incrementPlayerScore();
    } else if (gameResult === "Computer Wins!") {
        incrementComputerScore();
    }
}

/**
 * function to increment all 3 scores
 */

function incrementPlayerScore() {

    let currentPlayerScore = parseInt(playerScoreDisplay.innerHTML);
    let newPlayerScore = currentPlayerScore + 1;
    playerScoreDisplay.innerHTML = newPlayerScore;
}

function incrementComputerScore() {

    let currentComputerScore = parseInt(computerScoreDisplay.innerHTML);
    let newComputerScore = currentComputerScore + 1;
    computerScoreDisplay.innerHTML = newComputerScore;
}

function incrementDrawScore() {

    let currentDrawScore = parseInt(drawScoreDisplay.innerHTML);
    let newDrawScore = currentDrawScore + 1;
    drawScoreDisplay.innerHTML = newDrawScore;
}

/**
 * function to trigger modal box messages once any score reaches 5 points.
 */

function endGame() {
    if (computerScoreDisplay.innerHTML === "5") {
        displayMessage("Computer Wins!!", "end-game-option");
    } else if (playerScoreDisplay.innerHTML === "5") {
        displayMessage("You Win!!", "end-game-option");
    } else if (drawScoreDisplay.innerHTML === "5") {
        displayMessage("It's a Draw!!", "end-game-option");
    }
}

function displayMessage(message, optionsId) {
    document.getElementById("h1").innerHTML = message;
    modal_box.classList.remove("hide");
    modal_box.classList.add("show");
    document.getElementById("end-game-option").classList.add("hide");
    document.getElementById("start-game-option").classList.add("hide");
    document.getElementById("return-home-option").classList.add("hide");
    document.getElementById(optionsId).classList.remove("hide");
}

function initializeGame() {
    AVAILABLE_SELECTIONS.forEach(input => {
        input.addEventListener("click", (event) => {
            playerSelection = event.target.name;
            document.getElementById(PLAYER_SELECTION_DISPLAY).innerHTML = playerSelection;
            generateComputerSelection();
            getResult();
            trackScore();
            endGame();
        });
    });

    document.getElementById("startagain").addEventListener("click", (event) => {
        if (isGameStarted) {
            displayMessage("Restart New Game?", "start-game-option");
        } else {
            location.reload();
        }
    });

    document.getElementById("start-game-no").addEventListener("click", (event) => {
        modal_box.classList.remove("show");
        modal_box.classList.add("hide");
    });


    document.getElementById("return-home").addEventListener("click", (event) => {
        if (isGameStarted) {
            displayMessage("Are you sure you want to leave the Game?", "return-home-option");
        } else {
            window.location.href = "index.html";
        }
    });

    document.getElementById("return-home-no").addEventListener("click", (event) => {
        modal_box.classList.remove("show");
        modal_box.classList.add("hide");
    });
}

/**
 * add a click event listener to the available clickable options and trigger functions
 * and wait for DOMContent to load
 */
document.addEventListener("DOMContentLoaded", (event) => {
    initializeGame();
});