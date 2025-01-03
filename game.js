// game.js
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const cellSize = 75;
const rows = 8;
const cols = 8;

// Draw checkers board
function drawBoard() {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = col * cellSize;
            const y = row * cellSize;
            const isDark = (row + col) % 2 === 1;
            ctx.fillStyle = isDark ? '#D18B47' : '#F0CBA7'; // Dark and light colors for the squares
            ctx.fillRect(x, y, cellSize, cellSize);
        }
    }
}

// Initialize the game
function startGame() {
    drawBoard();
}

// Start the game when the page loads
window.onload = startGame;
