// ticTacToe.ts
type Player = 'X' | 'O' | null;
const board: Player[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function printBoard() {
    console.log(board.map(row => row.join(' | ')).join('\n---------\n'));
}

function makeMove(row: number, col: number, player: Player) {
    if (board[row][col] === null) {
        board[row][col] = player;
        printBoard();
    } else {
        console.log("Cell already occupied");
    }
}

printBoard();
makeMove(0, 0, 'X');
makeMove(1, 1, 'O');
