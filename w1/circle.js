function setup() 
{
    let r = 200;
    let xpos = windowWidth / 2;
    let ypos = windowHeight / 2;
    createCanvas(windowWidth - 40, windowHeight - 40);
    
    //drawCircle(xpos, ypos, r);
    drawSpiral(xpos, ypos, 0.5, 5);
}

function draw()
{
}

function drawCircle(xpos, ypos, r)
{
    for (let x = 0; x <= r; x += 0.1) {
        let y = sqrt(r * r - x * x);

        point(x + xpos, y + ypos);
        point(x + xpos, -y + ypos);
        point(-x + xpos, y + ypos);
        point(-x + xpos, -y + ypos);
    }
}

function drawSpiral(xpos, ypos, growth, size) {
    let r = 0;
    for (let i = 0; i < size; i++) {
        for (let x = r; x >= -r; x--) {
            let y = sqrt(r * r - x * x);

            point(x + xpos, y + ypos);
            r += growth;
        }
        for (let x = r; x >= -r; x--) {
            let y = sqrt(r * r - x * x);

            point(-x + xpos, -y + ypos);
            r+=growth;
        }
    }
}