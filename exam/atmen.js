/*

Designabsicht

Ich möchte eine visuelle Darstellung der Atmung erstellen, ähnlich eines Atemtrainers.
Dazu soll ein Kreis in der Mitte des Bildschirms erscheinen, der sich beim Einatmen vergrössert und beim Ausatmen verkleinert.
Der Kreis und dessen Verformung soll das Atmen mithilfe von variablem Radius durch Noise visualisieren.
Die Gestaltung soll minimalistisch sein, um die Konzentration auf die Atmung zu fördern. Der Fokus liegt im Zentrum des Bildschirms.
Dazu verwende ich einen hellen Hintergrund mit mehreren pastellfarbenen Kreisen, die sich langsam bewegen.

*/

let breatheIn = true;
let radius = 50;
let maxRadius = 300;
let minRadius = 50;
let speed = 1.005;
let noiseOffset = 0;
let opacity = 0;

// colors
let blue = '#D9E2F0';
let purple = '#c4adde';
let pink = '#de9bbb';

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
}

function draw() {
    // radial gradient background
    let gradient = drawingContext.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) / 2
    );
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(1, blue);
    drawingContext.fillStyle = gradient;
    drawingContext.fillRect(0, 0, width, height);

    // breathing
    if (breatheIn) {
        radius *= speed;
        if (opacity < 255) {
            opacity += 0.5;
        }
        if (radius >= maxRadius) {
            breatheIn = false;
        }
    } else {
        radius *= 1 / speed;
        if (opacity > 0) {
            opacity -= 0.5;
        }
        if (radius <= minRadius) {
            breatheIn = true;
            opacityDirection = 1;
        }
    }

    // draw breathing circles
    drawBreathingCircle(radius, blue, opacity);
    drawBreathingCircle(radius * 0.8, purple, opacity * 0.8);
    drawBreathingCircle(radius * 0.5, pink, opacity * 0.6);

    noiseOffset += 0.01;
}

function drawBreathingCircle(radius, color, opacity) {
    let noiseMax = 5;
    let points = 100;
    if (radius < 0) {
        return;
    }

    // draw breathing circle with noise
    noStroke();
    beginShape();
    for (let a = 0; a < TWO_PI; a += TWO_PI / points) {
        let xoff = map(cos(a), -1, 1, 0, noiseMax);
        let yoff = map(sin(a), -1, 1, 0, noiseMax);
        let r = radius + map(noise(xoff, yoff, noiseOffset), 0, 1, -10, 10);
        let x = r * cos(a);
        let y = r * sin(a);
        vertex(width / 2 + x, height / 2 + y);
    }
    endShape(CLOSE);

    // create radial gradient for the circle with opacity
    let circleGradient = drawingContext.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, radius
    );
    let rgbaColor = color + hex(floor(opacity), 2);
    circleGradient.addColorStop(0, blue + '00');
    circleGradient.addColorStop(1, rgbaColor);
    drawingContext.fillStyle = circleGradient;
    drawingContext.fill();
}
