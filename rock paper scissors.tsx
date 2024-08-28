// rockPaperScissors.ts
const choices = ['rock', 'paper', 'scissors'];

function playRound(playerChoice: string): void {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Player chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log("Player wins!");
    } else {
        console.log("Computer wins!");
    }
}

playRound('rock');
