function setup() {
    let r = 200;
    let xpos = windowWidth  / 2;
    let ypos = windowHeight / 2;

    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);

    //drawSpiral(xpos, ypos, 12, 6);
    drawSpiral(xpos, ypos, 20, 3);
}

function draw() {
}

function drawSpiral(xpos, ypos, growth, size) {
    growth *= 0.01;
    let r = 10;
    let x = -r;
    let y = 0;

    let red = 255;
    let green = 255;
    let blue = 255;

    drawCircle(x + xpos, y + ypos, r/3);
    r += growth;
    for (let i = 0; i <= size; i++) {
        //1/8
        while (y >= x) {
            let r0 = sqrt((x - 1) * (x - 1) + (y - 1) * (y - 1));
            let r1 = sqrt(x * x + (y - 1) * (y - 1));
            let r2 = sqrt((x + 1) * (x + 1) + (y - 1) * (y - 1));
            if (Math.abs(r1 - r) > Math.abs(r2 - r)) {
                x++;
                y--;
            } else if (Math.abs(r0 - r) > Math.abs(r1 - r)) {
                y--;
            } else {
                x--;
                y--;
            }
            drawCircle(x + xpos, y + ypos, r/3);
            r += growth;
        }
        //2/8
        while (x < 0) {
            let r0 = sqrt(x * x + (y - 1) * (y - 1));
            let r1 = sqrt((x + 1) * (x + 1) + (y - 1) * (y - 1));
            let r2 = sqrt((x + 1) * (x + 1) + y * y);
            if (Math.abs(r1 - r) > Math.abs(r2 - r)) {
                x++;
            } else if (Math.abs(r0 - r) > Math.abs(r1 - r)) {
                x++;
                y--;
            } else {
                y--;
            }
            drawCircle(x + xpos, y + ypos, r/3);
            r += growth;
        }
        //3/8
        while (-y > x) {
            let r0 = sqrt((x + 1) * (x + 1) + (y - 1) * (y - 1));
            let r1 = sqrt((x + 1) * (x + 1) + y * y);
            let r2 = sqrt((x + 1) * (x + 1) + (y + 1) * (y + 1));
            if (Math.abs(r1 - r) > Math.abs(r2 - r)) {
                x++;
                y++;
            } else if (Math.abs(r0 - r) > Math.abs(r1 - r)) {
                x++;
            } else {
                x++;
                y--;
            }
            drawCircle(x + xpos, y + ypos, r/3);
            r += growth;
        }
        //4/8
        while (y < 0) {
            let r0 = sqrt((x + 1) * (x + 1) + y * y);
            let r1 = sqrt((x + 1) * (x + 1) + (y + 1) * (y + 1));
            let r2 = sqrt(x * x + (y + 1) * (y + 1));
            if (Math.abs(r1 - r) > Math.abs(r2 - r)) {
                y++;
            } else if (Math.abs(r0 - r) > Math.abs(r1 - r)) {
                x++;
                y++;
            } else {
                x++;
            }
            drawCircle(x + xpos, y + ypos, r/3);
            r += growth;
        }
        //5/8
        while (y < x) {
            let r0 = sqrt((x + 1) * (x + 1) + (y + 1) * (y + 1));
            let r1 = sqrt(x * x + (y + 1) * (y + 1));
            let r2 = sqrt((x - 1) * (x - 1) + (y + 1) * (y + 1));
            if (Math.abs(r1 - r) > Math.abs(r2 - r)) {
                x--;
                y++;
            } else if (Math.abs(r0 - r) > Math.abs(r1 - r)) {
                y++;
            } else {
                x++;
                y++;
            }
            drawCircle(x + xpos, y + ypos, r/3);
            r += growth;
        }
        //6/8
        while (x > 0) {
            let r0 = sqrt(x * x + (y + 1) * (y + 1));
            let r1 = sqrt((x - 1) * (x - 1) + (y + 1) * (y + 1));
            let r2 = sqrt((x - 1) * (x - 1) + y * y);
            if (Math.abs(r1 - r) > Math.abs(r2 - r)) {
                x--;
            } else if (Math.abs(r0 - r) > Math.abs(r1 - r)) {
                x--;
                y++;
            } else {
                y++;
            }
            drawCircle(x + xpos, y + ypos, r/3);
            r += growth;
        }
        //7/8
        while (-y < x) {
            let r0 = sqrt((x - 1) * (x - 1) + (y + 1) * (y + 1));
            let r1 = sqrt((x - 1) * (x - 1) + y * y);
            let r2 = sqrt((x - 1) * (x - 1) + (y - 1) * (y - 1));
            if (Math.abs(r1 - r) > Math.abs(r2 - r)) {
                x--;
                y--;
            } else if (Math.abs(r0 - r) > Math.abs(r1 - r)) {
                x--;
            } else {
                x--;
                y++;
            }
            drawCircle(x + xpos, y + ypos, r/3);
            r += growth;
        }
        //8/8
        while (y > 0) {
            let r0 = sqrt((x - 1) * (x - 1) + y * y);
            let r1 = sqrt((x - 1) * (x - 1) + (y - 1) * (y - 1));
            let r2 = sqrt(x * x + (y - 1) * (y - 1));
            if (Math.abs(r1 - r) > Math.abs(r2 - r)) {
                y--;
            } else if (Math.abs(r0 - r) > Math.abs(r1 - r)) {
                x--;
                y--;
            } else {
                x--;
            }
            drawCircle(x + xpos, y + ypos, r/3);
            r += growth;
        }
    }

    function drawCircle(xpos, ypos, r) {
        let x = -r;
        let y = 0;
        /*
        if (green > 0) {
            green -= 0.2;
        } else if (blue > 0) {
            blue -= 0.2;
        } else if (red > 0) {
            red -= 0.2;
        }
        
        
        red = random(255) * 0.5 + 127.5;
        green = random(255);
        blue = random(255) * 0.5 + 127.5;
        */
        
        red = r * 2;
        green = r * 2;
        blue = r * 2;

        stroke(red, green, blue);
        //1/8
        while (y > x) {
            let r1 = sqrt(x * x + (y - 1) * (y - 1));
            let r2 = sqrt((x + 1) * (x + 1) + (y - 1) * (y - 1));
            if (Math.abs(r1 - r) > Math.abs(r2 - r)) {
                x++;
                y--;
            } else {
                y--;
            }
            point(x + xpos, y + ypos);
        }
        //2/8
        while (x < 0) {
            let r1 = sqrt((x + 1) * (x + 1) + (y - 1) * (y - 1));
            let r2 = sqrt((x + 1) * (x + 1) + y * y);
            if (Math.abs(r1 - r) > Math.abs(r2 - r)) {
                x++;
            } else {
                x++;
                y--;
            }
            point(x + xpos, y + ypos);
        }
        //3/8
        while (-y > x) {
            let r1 = sqrt((x + 1) * (x + 1) + y * y);
            let r2 = sqrt((x + 1) * (x + 1) + (y + 1) * (y + 1));
            if (Math.abs(r1 - r) > Math.abs(r2 - r)) {
                x++;
                y++;
            } else {
                x++;
            }
            point(x + xpos, y + ypos);
        }
        //4/8
        while (y < 0) {
            let r1 = sqrt((x + 1) * (x + 1) + (y + 1) * (y + 1));
            let r2 = sqrt(x * x + (y + 1) * (y + 1));
            if (Math.abs(r1 - r) > Math.abs(r2 - r)) {
                y++;
            } else {
                x++;
                y++;
            }
            point(x + xpos, y + ypos);
        }
        //5/8
        while (y < x) {
            let r1 = sqrt(x * x + (y + 1) * (y + 1));
            let r2 = sqrt((x - 1) * (x - 1) + (y + 1) * (y + 1));
            if (Math.abs(r1 - r) > Math.abs(r2 - r)) {
                x--;
                y++;
            } else {
                y++;
            }
            point(x + xpos, y + ypos);
        }
        //6/8
        while (x > 0) {
            let r1 = sqrt((x - 1) * (x - 1) + (y + 1) * (y + 1));
            let r2 = sqrt((x - 1) * (x - 1) + y * y);
            if (Math.abs(r1 - r) > Math.abs(r2 - r)) {
                x--;
            } else {
                x--;
                y++;
            }
            point(x + xpos, y + ypos);
        }
        //7/8
        while (-y < x) {
            let r1 = sqrt((x - 1) * (x - 1) + y * y);
            let r2 = sqrt((x - 1) * (x - 1) + (y - 1) * (y - 1));
            if (Math.abs(r1 - r) > Math.abs(r2 - r)) {
                x--;
                y--;
            } else {
                x--;
            }
            point(x + xpos, y + ypos);
        }
        //8/8
        while (y > 0) {
            let r1 = sqrt((x - 1) * (x - 1) + (y - 1) * (y - 1));
            let r2 = sqrt(x * x + (y - 1) * (y - 1));
            if (Math.abs(r1 - r) > Math.abs(r2 - r)) {
                y--;
            } else {
                x--;
                y--;
            }
            point(x + xpos, y + ypos);
        }
    }
}