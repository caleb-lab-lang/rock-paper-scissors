// 1. Keep your computer's random choice function exactly as it was
function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return "rock";
    } else if (randomNumber < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

// 2. Declare score variables globally so they persist across button clicks
let humanScore = 0;
let computerScore = 0;

// 3. Grab references to the HTML elements we created in index.html
const roundResultText = document.getElementById('round-result');
const runningScoreText = document.getElementById('running-score');
const matchWinnerText = document.getElementById('match-winner');

// 4. Refactored playRound function
function playRound(humanChoice) {
    // If either player has already reached 5 points, stop the game from running
    if (humanScore === 5 || computerScore === 5) return;

    const computerChoice = getComputerChoice();

    // Determine the round winner and update scores
    if (humanChoice === computerChoice) {
        roundResultText.textContent = `🤝 It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundResultText.textContent = `🎉 You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        roundResultText.textContent = `😢 You lose this round! ${computerChoice} beats ${humanChoice}.`;
    }

    // Update the running score display on the screen
    runningScoreText.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

    // Check if the match has come to an end
    checkForWinner();
}

// 5. Check if someone has reached 5 points and declare the ultimate winner
function checkForWinner() {
    if (humanScore === 5) {
        matchWinnerText.textContent = "🏆 GAME OVER: You won the entire game! Fantastic job!";
        disableButtons();
    } else if (computerScore === 5) {
        matchWinnerText.textContent = "🤖 GAME OVER: The computer wins the game. Better luck next time!";
        disableButtons();
    }
}

// Helper function to turn off buttons once the game finishes
function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

// 6. Set up Event Listeners for your UI buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));