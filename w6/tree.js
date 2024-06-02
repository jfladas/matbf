let axiom = "F";
let len = 250;
let angle;
let nTrees;


let ruleSets = [
    [
        { predecessor: "F", successor: "F+[+F-F]-[-F+F]F" }
    ],
    [
        { predecessor: "F", successor: "F[-F+F][+F-F]" }
    ],
    [
        { predecessor: "F", successor: "F[+F]F[-F][F]" }
    ],
    [
        { predecessor: "F", successor: "F[+FF][-F]" }
    ],
    [
        { predecessor: "F", successor: "F[+F[-F[+F]]]" }
    ]
];

function generateSentence(ruleSetIndex, generations) {
    let sentence = axiom;
    for (let g = 0; g < generations; g++) {
        let nextSentence = "";
        for (let i = 0; i < sentence.length; i++) {
            let current = sentence.charAt(i);
            let found = false;
            for (let j = 0; j < ruleSets[ruleSetIndex].length; j++) {
                if (current == ruleSets[ruleSetIndex][j].predecessor) {
                    found = true;
                    nextSentence += ruleSets[ruleSetIndex][j].successor;
                    break;
                }
            }
            if (!found) {
                nextSentence += current;
            }
        }
        sentence = nextSentence;
    }
    return sentence;
}

function drawTree(sentence, pos, color, strokeWeightValue) {
    resetMatrix();
    translate(width / 2 + pos, height / 4 * 3);
    stroke(color);
    strokeWeight(strokeWeightValue);

    for (let i = 0; i < sentence.length; i++) {
        angle = radians(random(15, 35));

        let current = sentence.charAt(i);

        if (current == "F") {
            line(0, 0, 0, -len);
            translate(0, -len);
        } else if (current == "G") {
            translate(0, -len);
        } else if (current == "+") {
            rotate(angle);
        } else if (current == "-") {
            rotate(-angle);
        } else if (current == "[") {
            push();
        } else if (current == "]") {
            pop();
        }
    }
}

function setup() {
    let canvas = createCanvas(windowWidth * 1.1, windowHeight * 1.1);
    canvas.position(-windowWidth * 0.05, 0);
    angle = radians(12);
    background('#051f20');

    let colors = [
        '#0b2b26',
        '#163832',
        '#235347',
        '#72957d',
        '#daf1de'
    ];

    nTrees = 4;
    let initialStrokeWeight = 2.5;

    for (let layer = 0; layer < colors.length; layer++) {
        let strokeWeightValue = initialStrokeWeight - layer * 0.5;
        if (strokeWeightValue < 0.5) strokeWeightValue = 0.5;

        for (let i = 0; i < nTrees; i++) {
            sentence = generateSentence(Math.floor(random(0, ruleSets.length)), 5);
            len = 150 * Math.pow(0.6, 5);
            drawTree(sentence, random(-width / 2, width / 2), colors[layer], strokeWeightValue);
        }
    }
}