//The logic behind getting the computer to choose randomly
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    if(computerChoice === 1) {
        return "rock";
    } else if(computerChoice === 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissor = document.querySelector("#scissor");
let roundInfo = document.querySelector("#roundInfo");
let scoreboard = document.querySelector("#scoreboard");
let finalResult = document.querySelector("#finalResult");
const playAgain = document.createElement("button");
const choiceButtons = document.querySelectorAll(".choicesBtns button");

// The logic to get the player's (human) choice.
btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

btnScissor.addEventListener("click", () => {
    playRound("scissor", getComputerChoice());
});
    

let playerScore = 0;
let computerScore = 0;

// The main function of the code is to compare the players' results, add points to the scoreboard and check the winner of the game.
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissor" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissor" && computerChoice === "paper"
    ) {
        ++playerScore;
        roundInfo.textContent = `${humanChoice} beats ${computerChoice} you win !`;

    } else if (humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissor" ||
        humanChoice === "scissor" && computerChoice === "rock"
    ) {
        ++computerScore;
        roundInfo.textContent = `${humanChoice} loses to ${computerChoice} you lose !`;

    } else {
        roundInfo.textContent = `${humanChoice} and ${computerChoice} We have a tie !`
    }

    scoreboard.textContent = `Player score: ${playerScore}\n x ${computerScore} Computer score`;

//
    if (playerScore === 5 && computerScore < 5) {
        finalResult.textContent = "Congratulations you win the game!";
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissor.disabled = true;
        playAgain.textContent = "Play Again !";
        document.body.appendChild(playAgain);
       
    }
    
    if (computerScore === 5 && playerScore < 5) {
        finalResult.textContent = "You lost, good luck next time !"
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissor.disabled = true;
        playAgain.textContent = "Play Again !";
        document.body.appendChild(playAgain);
        
    }   
    
}

// event that resets all scoreboard values ​​and restarts the game
playAgain.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    roundInfo.textContent = "";
    scoreboard.textContent = `Player score: ${playerScore}\n x ${computerScore} Computer score`;
    finalResult.textContent = "";
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissor.disabled = false;
    playAgain.remove();
});

// Improvements to be implemented later! (remove code repetition in functions)




