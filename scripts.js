let playerScore = 0;
let computerScore = 0;

function getUserScore() {
    return playerScore;
}

function getComputerScore () {
    return computerScore;
}

document.getElementById('user-wins').innerText = getUserScore();
document.getElementById('cpu-wins').innerText = getComputerScore();

function computerPlay() {
     /*
    Returns randomly either rock, paper, or scissors
    */
           
    let choice = Math.floor(Math.random() * 3) + 1;

    switch (choice) {
        case 1:
            return "boulder";
        case 2:
            return "parchment";
        case 3:
            return "shears";
        default:
            return "You broke it";
    }
}

function playRound(playerSelection, computerSelection) {
    /* Should listen for event click on button, take that value as playerSelection
    and run a round. Win, lose, or tie the results are displayed in the game-text id
    and the winner of the round is incremented by one. 
    */
    
    let playerChoice = playerSelection.toLowerCase();

    switch (playerChoice) {
        
        case "boulder":
            if (playerChoice === computerSelection) {
                document.getElementById('game-text').innerText = "It's a tie!";
                break;
            } 
            else if (computerSelection === "shears") {
                document.getElementById('game-text').innerText = "You win!";
                playerScore += 1;
                break;
            } else {
                document.getElementById('game-text').innerText = "You lose!";
                computerScore += 1;
                break;
            }

            case "parchment":
            if (playerChoice === computerSelection) {
                document.getElementById('game-text').innerText = "It's a tie!";
                break;
            } 
            else if (computerSelection === "boulder") {
                document.getElementById('game-text').innerText = "You win!";
                playerScore += 1;
                break;
            } else {
                document.getElementById('game-text').innerText = "You lose!";
                computerScore += 1;
                break;
            }

            case "shears":
            if (playerChoice === computerSelection) {
                document.getElementById('game-text').innerText = "It's a tie!";
                break;
            } 
            else if (computerSelection === "parchment") {
                document.getElementById('game-text').innerText = "You win!";
                playerScore += 1;
                break;
            } else {
                document.getElementById('game-text').innerText = "You lose!";
                computerScore += 1;
                break;
            }

            default:
                console.log("Something went wrong. :(");
    }
    

    
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        
      playRound(button.id, computerPlay());
      document.getElementById('user-wins').innerText = getUserScore();
      document.getElementById('cpu-wins').innerText = getComputerScore();

    });
  });