let angleX = 0;
let angleY = 0;
let angleZ = 0;

function setup() {
    createCanvas(400, 400, WEBGL);
}

function draw() {
    background(220);
    
    orbitControl();
    
    rotateX(angleX);
    rotateY(angleY);
    rotateZ(angleZ);
    
    //drawBox(100);
    drawTorus(100, 50);
}

function drawBox(size) {
    // Draw a box shape
    beginShape();
    fill(255);
    stroke(0);
    strokeWeight(1);
    // Front face
    vertex(-size / 2, -size / 2, size / 2);
    vertex(size / 2, -size / 2, size / 2);
    vertex(size / 2, size / 2, size / 2);
    vertex(-size / 2, size / 2, size / 2);
    endShape(CLOSE);

    // Back face
    beginShape();
    vertex(-size / 2, -size / 2, -size / 2);
    vertex(size / 2, -size / 2, -size / 2);
    vertex(size / 2, size / 2, -size / 2);
    vertex(-size / 2, size / 2, -size / 2);
    endShape(CLOSE);

    // Connect front and back faces
    beginShape();
    vertex(-size / 2, -size / 2, size / 2);
    vertex(-size / 2, -size / 2, -size / 2);
    vertex(-size / 2, size / 2, -size / 2);
    vertex(-size / 2, size / 2, size / 2);
    endShape(CLOSE);

    beginShape();
    vertex(size / 2, -size / 2, size / 2);
    vertex(size / 2, -size / 2, -size / 2);
    vertex(size / 2, size / 2, -size / 2);
    vertex(size / 2, size / 2, size / 2);
    endShape(CLOSE);

    // Top and bottom faces
    beginShape();
    vertex(-size / 2, -size / 2, size / 2);
    vertex(size / 2, -size / 2, size / 2);
    vertex(size / 2, -size / 2, -size / 2);
    vertex(-size / 2, -size / 2, -size / 2);
    endShape(CLOSE);

    beginShape();
    vertex(-size / 2, size / 2, size / 2);
    vertex(size / 2, size / 2, size / 2);
    vertex(size / 2, size / 2, -size / 2);
    vertex(-size / 2, size / 2, -size / 2);
    endShape(CLOSE);
}

function drawTorus(radius, tubeRadius) {
    // Draw a torus shape
    beginShape(TRIANGLES);
    fill(255);
    stroke(0);
    strokeWeight(1);
    const numPoints = 100;
    const angleStep = TWO_PI / numPoints;
    for (let i = 0; i < numPoints; i++) {
        const angle = i * angleStep;
        const x = (radius + tubeRadius * cos(angle)) * cos(angle);
        const y = (radius + tubeRadius * cos(angle)) * sin(angle);
        const z = tubeRadius * sin(angle);
        vertex(x, y, z);
    }
    endShape(CLOSE);
}

function keyPressed() {
    // Reset rotation angles when space key is pressed
    if (key === ' ') {
        angleX = 0;
        angleY = 0;
        angleZ = 0;
    }
}
