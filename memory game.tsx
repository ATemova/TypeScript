// memoryGame.ts
const cards = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'];
const shuffledCards = cards.sort(() => 0.5 - Math.random());

let firstChoice: string | null = null;
let secondChoice: string | null = null;

function chooseCard(index: number): void {
    const card = shuffledCards[index];
    if (firstChoice === null) {
        firstChoice = card;
    } else if (secondChoice === null) {
        secondChoice = card;
        checkMatch();
    }
}

function checkMatch(): void {
    if (firstChoice === secondChoice) {
        console.log("Match found!");
    } else {
        console.log("No match!");
    }
    firstChoice = null;
    secondChoice = null;
}

chooseCard(0);
chooseCard(4);
