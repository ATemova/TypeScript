// snakeGame.ts
interface Position {
    x: number;
    y: number;
}

const snake: Position[] = [{ x: 2, y: 2 }, { x: 1, y: 2 }, { x: 0, y: 2 }];
let direction: 'up' | 'down' | 'left' | 'right' = 'right';

function moveSnake() {
    const head = { ...snake[0] };
    switch (direction) {
        case 'up': head.y--; break;
        case 'down': head.y++; break;
        case 'left': head.x--; break;
        case 'right': head.x++; break;
    }
    snake.unshift(head);
    snake.pop(); // remove last segment
}

console.log("Snake's initial position:", snake);
moveSnake();
console.log("Snake's position after move:", snake);
