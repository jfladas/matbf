let angleX = 0;
let angleY = 0;
let angleZ = 0;

let numSides = 20;
let vertices = [];

function setup() {
    createCanvas(400, 400, WEBGL);
    //setupTorus(100, 50);
}

function draw() {
    background(220);

    orbitControl();

    rotateX(angleX);
    rotateY(angleY);
    rotateZ(angleZ);


    //drawBox(100);
    //drawTorus();
    //drawTorus(100, 50);
    //drawCylinder(50, 100);

    const radius = 50;
    const tubeRadius = 10;
    const segmentsX = 30;
    const segmentsY = 15;

    for (let y = 0; y <= segmentsY; y++) {
        const angleY = TWO_PI * y / segmentsY;
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);
        const outerRadius = radius + tubeRadius * cosY;

        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x <= segmentsX; x++) {
            const angleX = TWO_PI * x / segmentsX;
            const cosX = Math.cos(angleX);
            const sinX = Math.sin(angleX);

            const outerX = outerRadius * cosX;
            const outerY = outerRadius * sinX;
            const outerZ = tubeRadius * sinY;

            const innerX = outerRadius * cosX - tubeRadius; // Offset for inner circle
            const innerY = outerRadius * sinX;
            const innerZ = outerZ;

            vertex(outerX, outerY, outerZ);
            vertex(innerX, innerY, innerZ);
        }
        endShape();
    }
}


function drawBox(size) {
    size /= 2;
    // Draw a box shape
    beginShape();
    fill(255);
    stroke(0);
    strokeWeight(1);

    // Front face
    vertex(-size, -size, size);
    vertex(size, -size, size);
    vertex(size, size, size);
    vertex(-size, size, size);
    endShape(CLOSE);

    // Back face
    beginShape();
    vertex(-size, -size, -size);
    vertex(size, -size, -size);
    vertex(size, size, -size);
    vertex(-size, size, -size);
    endShape(CLOSE);

    // Connect front and back faces
    beginShape();
    vertex(-size, -size, size);
    vertex(-size, -size, -size);
    vertex(-size, size, -size);
    vertex(-size, size, size);
    endShape(CLOSE);

    beginShape();
    vertex(size, -size, size);
    vertex(size, -size, -size);
    vertex(size, size, -size);
    vertex(size, size, size);
    endShape(CLOSE);

    // Top and bottom faces
    beginShape();
    vertex(-size, -size, size);
    vertex(size, -size, size);
    vertex(size, -size, -size);
    vertex(-size, -size, -size);
    endShape(CLOSE);

    beginShape();
    vertex(-size, size, size);
    vertex(size, size, size);
    vertex(size, size, -size);
    vertex(-size, size, -size);
    endShape(CLOSE);
}

function drawCylinder(radius, height) {
    let angle = TWO_PI / numSides;
    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i <= numSides; i++) {
        let x = radius * cos(angle * i);
        let y = radius * sin(angle * i);
        let z = height / 2;
        vertex(x, y, z);
        vertex(x, y, -z);
    }
    endShape(CLOSE);
    // Draw top and bottom faces of the cylinder
    beginShape(TRIANGLE_FAN);
    vertex(0, 0, height / 2); // Center of the top face
    for (let i = 0; i <= numSides; i++) {
        let x = radius * cos(angle * i);
        let y = radius * sin(angle * i);
        vertex(x, y, height / 2);
    }
    endShape(CLOSE);

    beginShape(TRIANGLE_FAN);
    vertex(0, 0, -height / 2); // Center of the bottom face
    for (let i = 0; i <= numSides; i++) {
        let x = radius * cos(angle * i);
        let y = radius * sin(angle * i);
        vertex(x, y, -height / 2);
    }
    endShape(CLOSE);
}


/*
function setupTorus(radius, tubeRadius) {
    let angle = TWO_PI / numSides;
    for (let i = 0; i < numSides; i++) {
        let vertex = [];
        let x = radius * cos(angle * i);
        let y = radius * sin(angle * i);
        for (let j = 0; j < numSides; j++) {
            let y2 = tubeRadius * sin(angle * j);
            let z = tubeRadius * cos(angle * j);
            let vector = [x, y + y2, z, 1]
            let matrix = [
                [0, cos(angle * i), -sin(angle * i), 0],
                [0, sin(angle * i), cos(angle * i), 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1]
            ];
            let v = [0, 0, 0, 0];
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    v[i] += matrix[i][j] * vector[j];
                }
            }
            //vertex.push([v[0], v[1], v[2]]);
            vertex.push([vector[0], vector[1], vector[2]]);
        }
        vertex.push(vertex[0]);
        vertices.push(vertex);
    }
    vertices.push(vertices[0]);
    console.log(vertices);
}

function drawTorus() {

    beginShape();
    fill(255);
    stroke(0);
    strokeWeight(1);

    for (let i = 0; i < numSides; i++) {
        for (let j = 0; j < numSides; j++) {

            let v1 = vertices[i+1][j];
            let v2 = vertices[i+1][j+1];
            let v3 = vertices[i][j+1];
            let v4 = vertices[i][j];
            vertex(v1[0], v1[1], v1[2]);
            vertex(v2[0], v2[1], v2[2]);
            vertex(v3[0], v3[1], v3[2]);
            vertex(v4[0], v4[1], v4[2]);
            
            point(vertices[i][j][0], vertices[i][j][1], vertices[i][j][2]);
        }
    }

    endShape(CLOSE);
}

function drawTorus(radius, tubeRadius) {
    // Draw a torus shape
    beginShape(TRIANGLES);
    fill(255);
    stroke(0);
    strokeWeight(1);

    let numSides = 20;
    let vertices = [];
    let angle = TWO_PI / numSides;
    for (let i = 0; i < numSides; i++) {
        let x = radius * cos(angle * i);
        let y = radius * sin(angle * i);
        for (let j = 0; j < numSides; j++) {
            let y = tubeRadius * sin(angle * j);
            let z = tubeRadius * cos(angle * j);
            vertices.push([x, y, z]);
        }
    }

    for (let i = 0; i < numSides; i++) {
        let x = radius * cos(angle * i);
        let y = radius * sin(angle * i);
        for (let j = 0; j < numSides; j++) {
            let z = tubeRadius * cos(angle * j);
            let a = (i + 1) % numSides;
            let b = (j + 1) % numSides;
            let c = (i + 1) % numSides;
            let d = (j + 1) % numSides;
            vertex(vertices[i][0], vertices[i][1], vertices[i][2]);
            vertex(vertices[a][0], vertices[a][1], vertices[a][2]);
            vertex(vertices[b][0], vertices[b][1], vertices[b][2]);
            vertex(vertices[i][0], vertices[i][1], vertices[i][2]);
            vertex(vertices[c][0], vertices[c][1], vertices[c][2]);
            vertex(vertices[d][0], vertices[d][1], vertices[d][2]);
        }
    }

    endShape(CLOSE);
}
*/