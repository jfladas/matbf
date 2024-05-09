let angleX = 0;
let angleY = 0;
let angleZ = 0;

let numSides = 20;
let vertices = [];

function setup() {
    createCanvas(400, 400, WEBGL);
    
}

function draw() {
    background(220);

    orbitControl();

    angleX += 0.01;
    angleY += 0.01;
    angleZ += 0.01;

    rotateX(angleX);
    rotateY(angleY);
    rotateZ(angleZ);

    setupSnail(100, 50);
    drawSnail();
}

function setupSnail(radius, tubeRadius) {
    let angle = TWO_PI / numSides;
    for (let i = 0; i < numSides; i++) {
        let vertex = [];
        let xpos = radius * cos(angle * i);
        let ypos = radius * sin(angle * i);
        for (let j = 0; j < numSides; j++) {
            let x = tubeRadius * cos(angle * j);
            let y = tubeRadius * sin(angle * j);
            let z = j * 10;
            
            vertex.push([x + xpos, y + ypos, z]);
        }
        vertex.push(vertex[vertex.length - 1]);
        vertices.push(vertex);

        tubeRadius -= 10; //Schnecke 4
        radius -= 5; //Schnecke 3
    }
    vertices.push(vertices[vertices.length - 1]);
}

function drawSnail() {
    fill(255);
    stroke(0);
    strokeWeight(1);

    for (let i = 0; i < numSides; i++) {
        beginShape(TRIANGLE_STRIP);
        for (let j = 0; j < numSides; j++) {

            let v1 = vertices[i + 1][j];
            let v2 = vertices[i + 1][j + 1];
            let v3 = vertices[i][j + 1];
            let v4 = vertices[i][j];
            
            vertex(v1[0], v1[1], v1[2]);
            vertex(v2[0], v2[1], v2[2]);
            vertex(v3[0], v3[1], v3[2]);

            vertex(v1[0], v1[1], v1[2]);
            vertex(v3[0], v3[1], v3[2]);
            vertex(v4[0], v4[1], v4[2]);
        }
        endShape();
    } 
}