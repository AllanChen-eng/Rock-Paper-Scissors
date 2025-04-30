let humanScore = 0;
let computerScore = 0;
let scoreToWin = 3;
function resetGame() {
  const container = document.querySelector(".display");
  container.innerHTML = "";
  humanScore = 0;
  computerScore = 0;
}
function displayText(text) {
  const container = document.querySelector(".display");
  const content = document.createElement("div");
  content.classList.add("content");
  content.textContent = text;
  container.appendChild(content);
}
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) return "rock";
  if (choice == 1) return "paper";
  if (choice == 2) return "scissors";
  else return "invalid computer choice";
}

function playGame() {
  const btn = document.querySelectorAll(".btn");
  btn.forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.classList[0];
      if (choice == "reset") resetGame();
      else if (humanScore == 3 || computerScore == 3)
        displayText("Game is finished! Please press new Game!");
      else playRound(choice, getComputerChoice());
    });
  });
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (humanChoice == computerChoice) return "Draw! No Score Change!";
  displayText(calculateWinner(humanChoice, computerChoice));
  declareScore();
  checkWinner();
}

function calculateWinner(humanChoice, computerChoice) {
  let winMessage =
    "You Win! " +
    humanChoice.toUpperCase() +
    " beats " +
    computerChoice.toUpperCase();
  let loseMessage =
    "You Lose! " +
    computerChoice.toUpperCase() +
    " beats " +
    humanChoice.toUpperCase();
  if (humanChoice == "rock") {
    if (computerChoice == "scissors") {
      humanScore++;
      return winMessage;
    }
    if (computerChoice == "paper") {
      computerScore++;
      return loseMessage;
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      humanScore++;
      return winMessage;
    }
    if (computerChoice == "scissors") {
      computerScore++;
      return loseMessage;
    }
  } else if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      computerScore++;
      return loseMessage;
    }
    if (computerChoice == "paper") {
      humanScore++;
      return winMessage;
    }
  }
}
function checkWinner() {
  if (humanScore == 3) {
    displayText("Congratulations! You Won");
  } else if (computerScore == 3) {
    displayText("Game Over! You Lost!");
  }
}
function declareScore() {
  displayText(
    "Current Score: " + humanScore + " - Human " + computerScore + " - Computer"
  );
}

playGame();
