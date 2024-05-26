function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    stroke(0);
    fill(0);
}

function draw() {
    noLoop();
    background(255);

    // Generate random data points
    const points = [];
    for (let i = 0; i < 10; i++) {
        points.push(createVector(i * width / 10, random(height)));
    }
    drawSmoothstepInterpolation(points);
    
}

function drawSmoothstepInterpolation(points) {
    // Draw the line using smoothstep interpolation
    beginShape();
    for (let i = 0; i < points.length; i++) {
        const prev = points[i - 1] || points[0];
        const next = points[i + 1] || points[points.length - 1];
        const x = points[i].x;
        const y = smoothstepInterpolation(prev.y, points[i].y, next.y, clamp(x / width, 0, 1));
        curveVertex(x, y);
    }
    endShape();
}
function smoothstepInterpolation(a, b, c, x) {
    const t = smoothstep(0, 1, x);
    return a * (1 - t) * (1 - t) + b * 2 * (1 - t) * t + c * t * t;
}
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function smoothstep(edge0, edge1, x) {
    const t = (x - edge0) / (edge1 - edge0);
    return t * t * (3 - 2 * t);
}

function mouseClicked() {
    redraw();
}
