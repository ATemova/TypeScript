// connectFour.ts
const rows = 6;
const cols = 7;
const board: (string | null)[][] = Array.from({ length: rows }, () => Array(cols).fill(null));

function dropDisc(col: number, player: string): boolean {
    for (let row = rows - 1; row >= 0; row--) {
        if (board[row][col] === null) {
            board[row][col] = player;
            return true;
        }
    }
    return false;
}

function printBoard() {
    console.log(board.map(row => row.map(cell => (cell || '.')).join(' ')).join('\n'));
}

dropDisc(3, 'R');
dropDisc(3, 'Y');
printBoard();
