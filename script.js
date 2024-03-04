// Store HTML elements as JS Variables so we can easily access them later:
// Classes of elements to store (.p-score; .c-score; result)
// Use document.querySelector() syntax
const playerScoreDisplay = document.querySelector('.p-score');
const computerScoreDisplay = document.querySelector('.c-score');
const resultDisplay = document.querySelector('.result');

let playerScore = 0;
let computerScore = 0;

// Function to generate computer's choice (rock, paper, or scissors)
function computerSelection() {
    const choices = ['rock', 'paper', 'scissors'];
    // Generate a random value for the computer's choice and store it in a variable
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}