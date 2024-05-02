function setup() {
    let r = 200;
    let s = 100;
    let xpos = windowWidth / 2;
    let ypos = windowHeight / 2;
    createCanvas(windowWidth - 40, windowHeight - 40);

    drawCircle(xpos, ypos, 400);
    //drawSpiral(xpos, ypos, 0.01, 50);
    //drawPolygon(xpos, ypos, r, s);
    //for (let i = s; i > 0; i--) {drawPolygon(xpos, ypos, r, i);}
}

function draw() {
}

function drawCircle(xpos, ypos, radius) {
    for (let angle = 0; angle < 360; angle += 0.1) {
        let x = cos(radians(angle)) * radius;
        let y = sin(radians(angle)) * radius;
        point(x + xpos, y + ypos);
    }
}

function drawSpiral(xpos, ypos, growth, size) {
    let r = 0;
    for (let i = 0; i < size; i++) {
        for (let angle = 0; angle < 360; angle += 0.1) {
            let x = cos(radians(angle)) * r;
            let y = sin(radians(angle)) * r;
            point(x + xpos, y + ypos);
            r += growth;
        }
    }
}

function drawPolygon(xpos, ypos, radius, numSides) {
    let angle = TWO_PI / numSides;

    beginShape();
    for (let i = 0; i < numSides; i++) {
        let x = radius * cos(angle * i);
        let y = radius * sin(angle * i);
        vertex(x + xpos, y + ypos);
    }
    endShape(CLOSE);
}