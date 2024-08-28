// pong.ts

const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const context = canvas.getContext('2d');

if (!context) {
    throw new Error('Failed to get canvas context');
}

// Game settings
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const paddleWidth = 10;
const paddleHeight = 100;
const ballSize = 10;
const paddleSpeed = 5;
const ballSpeed = 4;

// Initial game state
const playerPaddle = { x: 20, y: canvasHeight / 2 - paddleHeight / 2 };
const aiPaddle = { x: canvasWidth - 30, y: canvasHeight / 2 - paddleHeight / 2 };
const ball = { x: canvasWidth / 2, y: canvasHeight / 2, vx: ballSpeed, vy: ballSpeed };

// Draw functions
function drawPaddle(paddle: { x: number; y: number }) {
    context.fillStyle = 'white';
    context.fillRect(paddle.x, paddle.y, paddleWidth, paddleHeight);
}

function drawBall() {
    context.beginPath();
    context.arc(ball.x, ball.y, ballSize, 0, Math.PI * 2);
    context.fillStyle = 'white';
    context.fill();
    context.closePath();
}

// Update game state
function update() {
    // Move ball
    ball.x += ball.vx;
    ball.y += ball.vy;

    // Ball collision with top and bottom
    if (ball.y - ballSize < 0 || ball.y + ballSize > canvasHeight) {
        ball.vy *= -1;
    }

    // Ball collision with paddles
    if (
        (ball.x - ballSize < playerPaddle.x + paddleWidth && ball.y > playerPaddle.y && ball.y < playerPaddle.y + paddleHeight) ||
        (ball.x + ballSize > aiPaddle.x && ball.y > aiPaddle.y && ball.y < aiPaddle.y + paddleHeight)
    ) {
        ball.vx *= -1;
    }

    // Ball out of bounds
    if (ball.x - ballSize < 0 || ball.x + ballSize > canvasWidth) {
        // Reset ball position
        ball.x = canvasWidth / 2;
        ball.y = canvasHeight / 2;
        ball.vx *= -1; // Change direction
    }

    // AI paddle movement
    if (aiPaddle.y + paddleHeight / 2 < ball.y) {
        aiPaddle.y += paddleSpeed;
    } else {
        aiPaddle.y -= paddleSpeed;
    }

    // Keep AI paddle within canvas
    aiPaddle.y = Math.max(Math.min(aiPaddle.y, canvasHeight - paddleHeight), 0);
}

// Main game loop
function gameLoop() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    drawPaddle(playerPaddle);
    drawPaddle(aiPaddle);
    drawBall();
    update();
    requestAnimationFrame(gameLoop);
}

// Start game
gameLoop();
