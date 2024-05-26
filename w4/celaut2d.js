let cols;
let rows;
let cellSize = 10;
let grid;
let nextGrid;

let currentPalette = 0; // Start with palette 1 (index 0)

function switchPalette(newPaletteIndex) {
    if (newPaletteIndex >= 0) {
        if (newPaletteIndex >= palettes.length) {
            currentPalette = 0;
        } else {
            currentPalette = newPaletteIndex;
        }
    }
}
const palettes = [
    [
        // Palette 1
        [12, 0, 15],  // Dark purple
        [92, 20, 35],  // Dark red
        [191, 75, 43], // Orange
        [238, 214, 118], // Yellow
    ],
    [
        // Palette 2
        [40, 28, 100],  // Dark purple
        [236, 43, 92],  // Pink
        [252, 104, 64], // Orange
        [248, 197, 61], // Yellow
    ],
    [
        // Palette 3
        [0, 10, 53],   // Dark purple
        [184, 21, 144], // Pink
        [240, 92, 49],  // Orange
        [241, 251, 196], // Yellow
    ],
    // Palette 4
    [
        [1, 4, 79], // Dark blue
        [0, 111, 219], // Blue
        [237, 208, 9], // Yellow
        [252, 23, 65], // Red
    ]
];
function keyPressed() {
    if (key === ' ') {
        switchPalette(currentPalette + 1);
    }
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    cols = Math.floor(width / cellSize) + 1;
    rows = Math.floor(height / cellSize) + 1;
    // let canvas = createCanvas(800, 800);
    // let canvasX = (windowWidth - width) / 2;
    // let canvasY = (windowHeight - height) / 2;
    // canvas.position(canvasX, canvasY);
    //cols = width / cellSize;
    //rows = height / cellSize;

    grid = create2DArray(cols, rows);
    nextGrid = create2DArray(cols, rows);

    // Initialize grid with random pattern
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            // let rndmState;
            // if (Math.floor(random(2)) === 0) {
            //     rndmState = 0;
            // } else {
            //     rndmState = Math.floor(random(4));
            // }
            // grid[i][j] = rndmState;
            grid[i][j] = 0;
        }
    }
    frameRate(12);
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
            switch (grid[i][j]) {
                case 0:
                    fill(palettes[currentPalette][0]);
                    break;
                case 1:
                    fill(palettes[currentPalette][1]);
                    break;
                case 2:
                    fill(palettes[currentPalette][2]);
                    break;
                case 3:
                    fill(palettes[currentPalette][3]);
                    break;
            }
            noStroke();
            rect(x, y, cellSize, cellSize);
        }
    }

    generateNextGen();
    checkInput();
}

function generateNextGen() {
    // for (let i = 0; i < cols; i++) {
    //     for (let j = 0; j < rows; j++) {
    //         let state = grid[i][j];
    //         let neighbors = countNeighbors(grid, i, j);

    //         if (neighbors > (3*state) && neighbors < (5*state)) {
    //             if (state === 3) {
    //                 nextGrid[i][j] = state; // Stay the same
    //             } else {
    //                 nextGrid[i][j] = state + 1; // Upgrade
    //             }
    //         } else if (neighbors < (1*state) || neighbors > (7*state)) {
    //             if (state === 0) {
    //                 nextGrid[i][j] = state; // Stay the same
    //             } else {
    //                 nextGrid[i][j] = state - 1; // Downgrade
    //             }
    //         } else {
    //             nextGrid[i][j] = state; // Stay the same
    //         }
    //     }
    // }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j];
            let neighbors = countNeighbors(i, j);
            if (neighbors === 3) {
                if (state === 3) {
                    nextGrid[i][j] = state; // Stay the same
                } else {
                    nextGrid[i][j] = state + 1; // Upgrade
                }
            } else if (neighbors < 2 || neighbors > 3) {
                nextGrid[i][j] = 0; // Death
            } else {
                nextGrid[i][j] = state; // Stay the same
            }
        }
    }

    // Swap grids
    let temp = grid;
    grid = nextGrid;
    nextGrid = temp;
}

function checkInput() {
    if (mouseIsPressed) {
        let x = Math.floor(mouseX / cellSize);
        let y = Math.floor(mouseY / cellSize);
        if (x >= 0 && x < cols && y >= 0 && y < rows) {
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    let col = (x + i + cols) % cols;
                    let row = (y + j + rows) % rows;
                    grid[col][row] = Math.floor(random(4));
                }
            }
        }
    }
}

function countNeighbors(x, y) {
    let sum = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;
            if (grid[col][row] !== 0) {
                sum++;
            }
            //sum += grid[col][row];
        }
    }
    if (grid[x][y] !== 0) {
        sum--;
    }
    //sum -= grid[x][y];
    return sum;
}
