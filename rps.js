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

function getHumanChoice() {
    const humanChoice = prompt("Please write your guess, you want rock, paper or scissor ?").toLowerCase();

    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissor") {
        return alert("Sorry, your typed it wrong or chose an invalid option, please try again. ");
    }
    else {
        return humanChoice;
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissor" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissor" && computerChoice === "paper"
        ) {
            console.log(`${humanChoice} beats ${computerChoice} you win ! \n scoreboard: Human ${++humanScore} x ${computerScore} Computer `);
        } else if (humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "scissor" ||
            humanChoice === "scissor" && computerChoice === "rock"
        ) {
            console.log(`${humanChoice} loses to ${computerChoice} you lose ! \nscoreboard: Computer: ${++computerScore} x ${humanScore} Human `);
        } else {
            console.log(`${humanChoice} and ${computerChoice} We have a tie ! \nscoreboard: Human ${humanScore} x ${computerScore} Computer`)
        }
        
        console.log(`Player score: ${humanScore}\n Computer score ${computerScore}`);

    }

    let roundsPlayed = 0;
        for (roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++ ) {
            let humanSelect = getHumanChoice();
            let computerSelect = getComputerChoice();
            playRound(humanSelect, computerSelect);
        }

        console.log("Final of 5 rounds !");

        if(humanScore > computerScore) {
            console.log(`You win for a score:\n Player score ${humanScore} x ${computerScore} computer score`);
        } else if (humanScore < computerScore) {
            console.log(`You lose for a score :\n Player score ${humanScore} x ${computerScore} computer score \n good luck next time.`);
        } else if (humanScore == computerScore) {
            console.log(`We have a draw player score = ${humanScore} computer score = ${computerScore} `);
        }
}

playGame();
