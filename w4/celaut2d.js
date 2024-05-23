let cols;
let rows;
let cellSize = 10;
let grid;
let nextGrid;

function setup() {
    createCanvas(800, 800);
    cols = width / cellSize;
    rows = height / cellSize;

    grid = create2DArray(cols, rows);
    nextGrid = create2DArray(cols, rows);

    // Initialize grid with random pattern
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }

    frameRate(10);
}

function create2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < cols; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

function draw() {
    background(255);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * cellSize;
            let y = j * cellSize;
            if (grid[i][j] === 1) {
                fill(0);
            } else {
                fill(255);
            }
            stroke(0);
            rect(x, y, cellSize, cellSize);
        }
    }

    generateNextGen();
}

function generateNextGen() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j];
            let neighbors = countNeighbors(grid, i, j);

            if (state === 0 && neighbors === 3) {
                nextGrid[i][j] = 1; // Birth
            } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
                nextGrid[i][j] = 0; // Death
            } else {
                nextGrid[i][j] = state; // Stays the same
            }
        }
    }

    // Swap grids
    let temp = grid;
    grid = nextGrid;
    nextGrid = temp;
}

function countNeighbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;
            sum += grid[col][row];
        }
    }
    sum -= grid[x][y];
    return sum;
}
