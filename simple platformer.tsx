// platformer.ts
interface Player {
    x: number;
    y: number;
    velocity: number;
}

const player: Player = { x: 0, y: 0, velocity: 0 };

function updatePlayer() {
    player.velocity += 1; // gravity effect
    player.y += player.velocity;
    if (player.y > 100) player.y = 100; // floor
}

updatePlayer();
console.log(`Player's position: x=${player.x}, y=${player.y}`);
