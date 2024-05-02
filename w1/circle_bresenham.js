function setup() 
{
    let r = 200;
    let xpos = windowWidth * 0.8 / 2;
    let ypos = windowHeight * 0.8 / 2;
    createCanvas(windowWidth * 0.8, windowHeight * 0.8);
    
    drawCircle(xpos, ypos, r);
    //drawSpiral(xpos, ypos, 20, 5);
}

function draw() {
}

function drawCircle(xpos, ypos, r)
{
    let x = -r;
    let y = 0;
    point(x + xpos, y + ypos);
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

function drawSpiral(xpos, ypos, growth, size) {
    growth *= 0.01;
    let r = 3;
    let x = -r;
    let y = 0;
    point(x + xpos, y + ypos);
    r += growth;
    for (let i = 0; i <= size; i++) {
        console.log(x + " " + y);
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
            point(x + xpos, y + ypos);
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
            point(x + xpos, y + ypos);
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
            point(x + xpos, y + ypos);
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
            point(x + xpos, y + ypos);
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
            point(x + xpos, y + ypos);
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
            point(x + xpos, y + ypos);
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
            point(x + xpos, y + ypos);
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
            point(x + xpos, y + ypos);
            r += growth;
        }
    }
}