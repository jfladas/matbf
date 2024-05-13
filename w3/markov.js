let generatedText = "";

let markovChain = {};

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}


function feedText(text) {
    let words = text.split(" ");

    for (let i = 0; i < words.length - 1; i++) {
        let currentWord = words[i];
        let nextWord = words[i + 1];

        if (markovChain[currentWord]) {
            markovChain[currentWord].push(nextWord);
        } else {
            markovChain[currentWord] = [nextWord];
        }
    }
}

function generateText(startWord, length) {
    let result = startWord + " ";
    let currentWord = startWord;

    for (let i = 0; i < length; i++) {
        if (markovChain[currentWord]) {
            let nextWord = getRandomElement(markovChain[currentWord]);
            result += nextWord + " ";
            currentWord = nextWord;
        } else {
            break;
        }
    }

    return result;
}

function setup() {

    let inputText = `
Birdo ist eine der ikonischen Figuren im Mario-Universum von Nintendo.
Bekannt für ihr markantes Design und ihre Rolle als einer der ersten bekannten transgender-Charaktere in einem Mainstream-Videospiel,
hat Birdo im Laufe der Jahre zahlreiche Interpretationen und Kontroversen hervorgebracht.
Birdo wurde erstmals in Super Mario Bros. 2 für das Nintendo Entertainment System eingeführt, das 1988 in Nordamerika erschien.
Ursprünglich in Japan als Doki Doki Panic veröffentlicht, war das Spiel ein Spin-off von Super Mario Bros.
und wurde für den westlichen Markt umgestaltet. In diesem Spiel war Birdo ein Endgegner, der Eier aus ihrem Mund spuckte,
die der Spieler zurückwerfen musste, um sie zu besiegen.
In der englischen Anleitung von Super Mario Bros. 2 wurde Birdo als männlich beschrieben, der sich als weiblich identifiziert,
was für ein Videospiel aus den späten 1980er Jahren bemerkenswert war.
Diese Beschreibung führte zu Diskussionen und Kontroversen über die Identität und den Hintergrund von Birdo.
Birdo ist oft mit einem großen roten Bogen auf dem Kopf und einem hervorstehenden Loch dargestellt, aus dem sie Eier schießt.
Ihre Körperfarbe ist meist rosa oder pink, und sie trägt eine Halskette oder ein Accessoire.
Sie wurde oft in einem etwas überdrehten oder komischen Stil dargestellt,
der gut zum farbenfrohen und cartoonartigen Design des Mario-Universums passt.
Birdo taucht in verschiedenen Spielen des Mario-Franchises auf, einschließlich Mario Kart,
Mario Party, Mario Tennis und Mario Golf. In diesen Spielen ist sie oft eine spielbare Figur
mit einzigartigen Fähigkeiten oder Attributen. In Mario Kart Double Dash!! ist Birdo beispielsweise dafür bekannt,
Eier als Spezialgegenstand zu werfen, während sie in Mario Tennis als einer der Charaktere mit mächtigen Schlägen bekannt ist.
Birdos Status als eine der ersten bekannten transgender-Charaktere in einem Videospiel
hat im Laufe der Jahre zu vielen Diskussionen geführt. Die anfängliche Beschreibung in der Anleitung von Super Mario Bros. 2
wurde in späteren Veröffentlichungen oft weggelassen oder verändert. Diese Inkonsistenz führte zu Debatten darüber,
ob Nintendo die Identität von Birdo respektiert oder ignoriert.
Einige Fans begrüßen Birdo als eine positive Darstellung der LGBTQ+-Gemeinschaft im Videospielbereich,
während andere kritisieren, dass die Darstellung oft auf Stereotypen oder Missverständnissen basiert.
Nintendo hat in den vergangenen Jahren darauf verzichtet, sich klar zu Birdos Geschlecht oder Hintergrund zu äußern,
was die Diskussionen weiter angefacht hat.
Unabhängig von der Kontroverse bleibt Birdo eine beliebte und oft wiederkehrende Figur im Mario-Franchise.
Sie ist ein erkennbarer Charakter, der bei Fans beliebt ist und in verschiedenen Spielen und Merchandise-Produkten vorkommt.
Trotz der Diskussionen um ihre Darstellung bleibt Birdo eine einzigartige und bemerkenswerte Figur im Videospiel-Franchise.
`;
    feedText(inputText);

    generatedText = generateText("Birdo", 100);

    createP(generatedText);
}

// p5.js draw function (not necessarily used for text display, but useful for animations)
function draw() {

    // Additional code for animations or interactions could go here
}