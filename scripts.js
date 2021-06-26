let playerScore = 0;
let computerScore = 0;

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
                console.log("It's a tie!");
                break;
            } 
            else if (computerSelection === "shears") {
                console.log("You win!");
                playerScore += 1;
                break;
            } else {
                console.log("You lose!");
                computerScore += 1;
                break;
            }

            case "parchment":
            if (playerChoice === computerSelection) {
                console.log("It's a tie!");
                break;
            } 
            else if (computerSelection === "boulder") {
                console.log("You win!");
                playerScore += 1;
                break;
            } else {
                console.log("You lose!");
                computerScore += 1;
                break;
            }

            case "shears":
            if (playerChoice === computerSelection) {
                console.log("It's a tie!");
                break;
            } 
            else if (computerSelection === "parchment") {
                console.log("You win!");
                playerScore += 1;
                break;
            } else {
                console.log("You lose!");
                computerScore += 1;
                break;
            }

            default:
                console.log("Something went wrong. :(");
    }
    

    
}