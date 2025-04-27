
let humanScore = 0;
let computerScore = 0;
let roundsToPlay = 5;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) return "rock";
  if (choice == 1) return "paper";
  if (choice == 2) return "scissors";
  else return "invalid computer choice";
}

function getHumanChoice() {
  let player = prompt("Rock, Paper, or Scissors?");
 if(player != null) player.toLowerCase();
  while (
    player != "rock" &&
    player != "paper" &&
    player != "scissors" &&
    player != null
  ) {
    player = prompt(" Invalid input. Please enter Rock, Paper, or Scissors?");
  }
  return player;
}
function playGame(){
    humanScore = 0;
    computerScore = 0;
    for(let x = 0;x < roundsToPlay; x++){
        console.log(playRound(getHumanChoice(),getComputerChoice()));
    }
    console.log(calculateScore(humanScore,computerScore,roundsToPlay));
}
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if(humanChoice == computerChoice) return "Draw! No Score Change!";
   return calculateWinner(humanChoice, computerChoice);
  }
function calculateWinner(humanChoice, computerChoice){
    let winMessage = "You Win! " + humanChoice + " beats " + computerChoice;
    let loseMessage = "You Lose! " + computerChoice + " beats " + humanChoice;
    if(humanChoice == "rock"){
        if(computerChoice == "scissors"){
            humanScore++;
            return winMessage;
        }
        if(computerChoice == "paper"){
            computerScore++;
            return loseMessage;
        }
    }else if(humanChoice == "paper"){
        if(computerChoice == "rock"){
            humanScore++;
            return winMessage;
        }
        if(computerChoice == "scissors"){
            computerScore++
            return loseMessage;
        }
    } else if(humanChoice == "scissors"){
        if(computerChoice =="rock"){
            computerScore++;
            return loseMessage;
        }
        if(computerChoice == "paper"){
            humanScore++;
            return winMessage;
        }
    }
}
function calculateScore(humanScore,ComputerScore,roundsToPlay){
    if(humanScore > computerScore) return "You won with a score of " + humanScore + " out of " + roundsToPlay;
    else return "You lost! The computer beat you by " + (ComputerScore - humanScore) + " points!";
}
playGame();