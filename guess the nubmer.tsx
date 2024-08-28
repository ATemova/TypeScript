// guessTheNumber.ts
function guessTheNumber() {
    const target = Math.floor(Math.random() * 100) + 1;
    let guess: number | null = null;
    const maxAttempts = 5;
    let attempts = 0;

    while (guess !== target && attempts < maxAttempts) {
        guess = Number(prompt("Guess a number between 1 and 100"));
        if (guess < target) {
            alert("Too low!");
        } else if (guess > target) {
            alert("Too high!");
        } else {
            alert("Congratulations! You guessed it!");
        }
        attempts++;
    }

    if (guess !== target) {
        alert(`Sorry, the number was ${target}.`);
    }
}

guessTheNumber();
