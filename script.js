document.addEventListener("DOMContentLoaded", function() {
    // Variables to store game state
    let playerName = "";
    let playerScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;
    const totalRounds = 5;

    // Function to start the game
    function startGame() {
        // Get player's name from input field
        playerName = document.getElementById("username").value.trim();
        // Check if player's name is entered
        if (playerName === "") {
            alert("Please enter your name to start the game.");
            return;
        }
        // Hide user-info section and display scoreboard and choices
        document.querySelector('.user-info').style.display = 'none';
        document.querySelector('.scoreboard').style.display = 'block';
        document.querySelector('.choices').style.display = 'flex';
        // Display round information
        document.querySelector('.rounds').textContent = `Round 1 of ${totalRounds}`;
        // Hide start-game button
        document.getElementById('start-game').style.display = 'none';
    }

    // Event listener for starting the game
    document.getElementById("start-game").addEventListener("click", startGame);

    // Function to handle game choices
    function throwChoice(choice) {
        // Call playRound function with player's choice
        playRound(choice);
    }

    // Event listeners for game choices
    // Event listener for Rock button
    document.getElementById('rock').addEventListener('click', function() {
        throwChoice('rock');
    });

    // Event listener for Paper button
    document.getElementById('paper').addEventListener('click', function() {
        throwChoice('paper');
    });

    // Event listener for Scissors button
    document.getElementById('scissors').addEventListener('click', function() {
        throwChoice('scissors');
    });

    // Function to play a round of the game
    function playRound(playerChoice) {
        // Get computer's choice
        const computerChoice = computerSelection();
        // Determine the winner of the round
        let roundResult = "";
        if (playerChoice === computerChoice) {
            roundResult = "It's a tie!";
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            roundResult = 'You win!';
            playerScore++;
        } else {
            roundResult = 'Computer wins!';
            computerScore++;
        }
        // Update the scores and display the result
        updateScores();
        displayResult(roundResult);
        // Increment roundsPlayed and check if the game is over
        roundsPlayed++;
        if (roundsPlayed === totalRounds) {
            endGame();
        } else {
            // Update the round information
            document.querySelector('.rounds').textContent = `Round ${roundsPlayed + 1} of ${totalRounds}`;
        }
    }

    // Function to select a random choice for the computer
    function computerSelection() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

    // Function to update the scores on the scoreboard
    function updateScores() {
        document.querySelector('.p-score').textContent = playerScore;
        document.querySelector('.c-score').textContent = computerScore;
    }

    // Function to display the result of a round
    function displayResult(result) {
        document.querySelector('.result').textContent = result;
    }

    // Function to end the game and display the final result
    function endGame() {
        let resultMessage = "";
        if (playerScore > computerScore) {
            resultMessage = `Congratulations, ${playerName}! You win the game.`;
        } else if (playerScore < computerScore) {
            resultMessage = `Better luck next time, ${playerName}. Computer wins the game.`;
        } else {
            resultMessage = `It's a tie! The game ends in a draw.`;
        }
        document.querySelector('.result').textContent = resultMessage;
        // Show reset button
        document.querySelector('.reset-button').style.display = 'block';
    }

    // Function to reset the game
    function resetGame() {
        playerName = "";
        playerScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
        document.getElementById("username").value = ""; // Clear input field
        document.querySelector('.user-info').style.display = 'block'; // Show user-info section
        document.querySelector('.scoreboard').style.display = 'none'; // Hide scoreboard
        document.querySelector('.choices').style.display = 'none'; // Hide choices
        document.querySelector('.result').textContent = ""; // Clear result
        document.querySelector('.reset-button').style.display = 'none'; // Hide reset button
        document.getElementById('start-game').style.display = 'block'; // Show start game button
    }

    // Event listener for reset button
    document.querySelector('.reset-button').addEventListener('click', resetGame);
});
