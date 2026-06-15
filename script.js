// 1. Get the computer's random choice
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

// 2. Get the human player's choice
function getHumanChoice() {
    let userInput = prompt("Enter rock, paper, or scissors:");
    if (!userInput) return ""; 
    return userInput.toLowerCase().trim(); // Keeps it case-insensitive and removes accidental spaces
}

// 3. Declare the score variables and game logic inside the playGame function scope
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // 4. Play a single round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`🤝 It's a tie! Both chose ${humanChoice}.`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`🎉 You win this round! ${humanChoice} beats ${computerChoice}.`);
        } else if (
            (computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "paper" && humanChoice === "rock") ||
            (computerChoice === "scissors" && humanChoice === "paper")
        ) {
            computerScore++;
            console.log(`😢 You lose this round! ${computerChoice} beats ${humanChoice}.`);
        } else {
            console.log("⚠️ Invalid choice! No points awarded this round.");
        }
        console.log(`Scoreboard -> You: ${humanScore} | Computer: ${computerScore}`);
    }

    console.log("--- Starting Rock Paper Scissors (5 Rounds) ---");

    // 5. Play exactly 5 rounds using a loop
    for (let i = 1; i <= 5; i++) {
        console.log(`\n--- ROUND ${i} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // 6. Declare final winner
    console.log("\n==============================");
    console.log("FINAL RESULTS:");
    console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("🏆 GAME OVER: You won the entire game! Fantastic job!");
    } else if (computerScore > humanScore) {
        console.log("🤖 GAME OVER: The computer wins the game. Better luck next time!");
    } else {
        console.log("🤝 GAME OVER: The game is a total tie!");
    }
    console.log("==============================");
}

// Start the game automatically when the page loads
playGame();