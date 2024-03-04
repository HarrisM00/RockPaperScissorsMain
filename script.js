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

    // Rest of the JavaScript code remains the same

    // Functions playRound, computerSelection, resetGame goes here
});
