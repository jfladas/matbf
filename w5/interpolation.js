let values = [];
let numPoints = 10;
let resolution = 200;
let modes = [noInterpolation, linearInterpolation, cosineInterpolation, perlinInterpolation, smoothstepInterpolation];
let mode = 0;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    stroke(0);
    fill(0);

    // Generate random values
    for (let i = 0; i < numPoints; i++) {
        values.push(random(height / 2));
    }
}

function draw() {
    noLoop();
    background(255);

    // Draw interpolated points
    drawInterpolatedPoints(values, 800, modes[mode]);
}

function drawPoints(points, yOffset) {
    beginShape();
    for (let i = 0; i < points.length; i++) {
        vertex((width / numPoints) * i, yOffset - points[i]);
    }
    endShape();
}

function drawInterpolatedPoints(values, yOffset, interpolationFunc) {
    beginShape();
    for (let i = 0; i < values.length - 1; i++) {
        for (let t = 0; t < resolution; t++) {
            let x = (width / numPoints) * (i + t / resolution) + width / numPoints / 2;
            let y = yOffset - interpolationFunc(values[i], values[i + 1], t / resolution);
            vertex(x, y);
        }
    }
    endShape();
}

// No Interpolation
function noInterpolation(a, b, t) {
    return a;
}

// Linear Interpolation
function linearInterpolation(a, b, t) {
    return a * (1 - t) + b * t;
}

// Cosine Interpolation
function cosineInterpolation(a, b, t) {
    let ft = t * PI;
    let f = (1 - cos(ft)) * 0.5;
    return a * (1 - f) + b * f;
}

// Perlin Interpolation
function perlinInterpolation(a, b, t) {
    return a * (1 - (6 * Math.pow(t, 5) - 15 * Math.pow(t, 4) + 10 * Math.pow(t, 3))) + b * (6 * Math.pow(t, 5) - 15 * Math.pow(t, 4) + 10 * Math.pow(t, 3));
}

// Smoothstep Interpolation
function smoothstepInterpolation(a, b, t) {
    t = t * t * (3 - 2 * t);
    return a * (1 - t) + b * t;
}

function mouseClicked() {
    mode = (mode + 1) % modes.length;
    redraw();
}
