let cellSize = 10;
let cols;
let rows;
let currentGen = [];
let nextGen = [];

function setup() {
    createCanvas(800, 800);
    cols = width / cellSize;
    rows = height / cellSize;

    // Initialize the first row with a single middle cell alive
    for (let i = 0; i < cols; i++) {
        if (i === floor(cols / 2)) {
            currentGen[i] = 1;
        } else {
            currentGen[i] = 0;
        }
    }
    // Draw the initial generation
    drawGeneration(currentGen, 0);
    noLoop(); // No continuous looping
}

function rule30(left, middle, right) {
    let binaryString = '' + left + middle + right;
    switch (binaryString) {
        case '111': return 0;
        case '110': return 0;
        case '101': return 0;
        case '100': return 1;
        case '011': return 1;
        case '010': return 1;
        case '001': return 1;
        case '000': return 0;
    }
}

function myRule(left, middle, right) {
    let binaryString = '' + left + middle + right;
    switch (binaryString) {
        case '111': return 0;
        case '110': return 1;
        case '101': return 1;
        case '100': return 0;
        case '011': return 1;
        case '010': return 0;
        case '001': return 0;
        case '000': return 1;
    }
}

function generateNextGen() {
    for (let i = 0; i < cols; i++) {
        let left = currentGen[(i - 1 + cols) % cols];
        let middle = currentGen[i];
        let right = currentGen[(i + 1) % cols];
        //nextGen[i] = rule30(left, middle, right);
        nextGen[i] = myRule(left, middle, right);
    }

    // Copy nextGen to currentGen and reset nextGen
    currentGen = nextGen.slice();
}

function drawGeneration(gen, row) {
    for (let i = 0; i < gen.length; i++) {
        let x = i * cellSize;
        let y = row * cellSize;
        if (gen[i] === 1) {
            fill(0);
        } else {
            fill(255);
        }
        stroke(0);
        rect(x, y, cellSize, cellSize);
    }
}

function draw() {
    for (let row = 1; row < rows; row++) {
        generateNextGen();
        drawGeneration(currentGen, row);
    }
}
