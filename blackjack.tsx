// simpleBlackjack.ts
class Card {
    constructor(public value: number, public suit: string) {}
}

function getRandomCard(): Card {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const value = Math.floor(Math.random() * 13) + 1;
    const suit = suits[Math.floor(Math.random() * suits.length)];
    return new Card(value, suit);
}

function calculateScore(cards: Card[]): number {
    return cards.reduce((sum, card) => sum + Math.min(card.value, 10), 0);
}

const playerCards = [getRandomCard(), getRandomCard()];
console.log(`Your cards: ${playerCards.map(card => card.value).join(', ')}`);
console.log(`Score: ${calculateScore(playerCards)}`);
