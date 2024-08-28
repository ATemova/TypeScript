// breakout.ts
interface Ball {
    x: number;
    y: number;
    vx: number;
    vy: number;
}

const ball: Ball = { x: 50, y: 50, vx: 2, vy: -2 };
const paddle = { x: 40, y: 90, width: 20, height: 5 };
const bricks = Array.from({ length: 5 }, (_, i) => ({ x: i * 20, y: 10, width: 15, height: 5 }));

function update() {
    // Update ball position
    ball.x += ball.vx;
    ball.y += ball.vy;

    // Ball collision with walls
    if (ball.x <= 0 || ball.x >= 100) ball.vx *= -1;
    if (ball.y <= 0) ball.vy *= -1;

    // Ball collision with paddle
    if (
        ball.x >= paddle.x &&
        ball.x <= paddle.x + paddle.width &&
        ball.y >= paddle.y &&
        ball.y <= paddle.y + paddle.height
    ) {
        ball.vy *= -1;
    }

    // Ball collision with bricks
    for (const brick of bricks) {
        if (
            ball.x >= brick.x &&
            ball.x <= brick.x + brick.width &&
            ball.y >= brick.y &&
            ball.y <= brick.y + brick.height
        ) {
            ball.vy *= -1;
            // Remove the brick
            const index = bricks.indexOf(brick);
            if (index > -1) bricks.splice(index, 1);
            break;
        }
    }

    console.log(`Ball position: (${ball.x}, ${ball.y})`);
    console.log(`Remaining bricks: ${bricks.length}`);
}

update();
