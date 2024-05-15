let generatedSentences = [];

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

    console.log(markovChain);
}

function generateSentences(startWord, num) {
    let sentences = [];
    let result = startWord + " ";
    let currentWord = startWord;

    for (let i = 0; i < num; i++) {
        do {
            if (markovChain[currentWord]) {
                let nextWord = getRandomElement(markovChain[currentWord]);
                result += nextWord + " ";
                currentWord = nextWord;
            } else {
                console.log("No word found for " + currentWord);
                break;
            }
        } while (!currentWord.includes("."));
        console.log(result);
        result = toHiragana(result);
        sentences.push(result);
        result = "";
    }
    return sentences;
}

function toHiragana(text) {

    text = text.toLowerCase();

    text = text.replace(/kkya/g, "っきゃ");
    text = text.replace(/kkyu/g, "っきゅ");
    text = text.replace(/kkyo/g, "っきょ");
    text = text.replace(/ssha/g, "っしゃ");
    text = text.replace(/sshu/g, "っしゅ");
    text = text.replace(/ssho/g, "っしょ");
    text = text.replace(/ccha/g, "っちゃ");
    text = text.replace(/cchu/g, "っちゅ");
    text = text.replace(/ccho/g, "っちょ");
    text = text.replace(/nnya/g, "っにゃ");
    text = text.replace(/nnyu/g, "っにゅ");
    text = text.replace(/nnyo/g, "っにょ");
    text = text.replace(/hhya/g, "っひゃ");
    text = text.replace(/hhyu/g, "っひゅ");
    text = text.replace(/hhyo/g, "っひょ");
    text = text.replace(/mmya/g, "っみゃ");
    text = text.replace(/mmyu/g, "っみゅ");
    text = text.replace(/mmyo/g, "っみょ");
    text = text.replace(/rrya/g, "っりゃ");
    text = text.replace(/rryu/g, "っりゅ");
    text = text.replace(/rryo/g, "っりょ");
    text = text.replace(/ggya/g, "っぎゃ");
    text = text.replace(/ggyu/g, "っぎゅ");
    text = text.replace(/ggyo/g, "っぎょ");
    text = text.replace(/jja/g, "っじゃ");
    text = text.replace(/jju/g, "っじゅ");
    text = text.replace(/jjo/g, "っじょ");
    text = text.replace(/bbya/g, "っびゃ");
    text = text.replace(/bbyu/g, "っびゅ");
    text = text.replace(/bbyo/g, "っびょ");
    text = text.replace(/ppya/g, "っぴゃ");
    text = text.replace(/ppyu/g, "っぴゅ");
    text = text.replace(/ppyo/g, "っぴょ");

    text = text.replace(/kya/g, "きゃ");
    text = text.replace(/kyu/g, "きゅ");
    text = text.replace(/kyo/g, "きょ");
    text = text.replace(/sha/g, "しゃ");
    text = text.replace(/shu/g, "しゅ");
    text = text.replace(/sho/g, "しょ");
    text = text.replace(/cha/g, "ちゃ");
    text = text.replace(/chu/g, "ちゅ");
    text = text.replace(/cho/g, "ちょ");
    text = text.replace(/nya/g, "にゃ");
    text = text.replace(/nyu/g, "にゅ");
    text = text.replace(/nyo/g, "にょ");
    text = text.replace(/hya/g, "ひゃ");
    text = text.replace(/hyu/g, "ひゅ");
    text = text.replace(/hyo/g, "ひょ");
    text = text.replace(/mya/g, "みゃ");
    text = text.replace(/myu/g, "みゅ");
    text = text.replace(/myo/g, "みょ");
    text = text.replace(/rya/g, "りゃ");
    text = text.replace(/ryu/g, "りゅ");
    text = text.replace(/ryo/g, "りょ");
    text = text.replace(/gya/g, "ぎゃ");
    text = text.replace(/gyu/g, "ぎゅ");
    text = text.replace(/gyo/g, "ぎょ");
    text = text.replace(/ja/g, "じゃ");
    text = text.replace(/ju/g, "じゅ");
    text = text.replace(/jo/g, "じょ");
    text = text.replace(/bya/g, "びゃ");
    text = text.replace(/byu/g, "びゅ");
    text = text.replace(/byo/g, "びょ");
    text = text.replace(/pya/g, "ぴゃ");
    text = text.replace(/pyu/g, "ぴゅ");
    text = text.replace(/pyo/g, "ぴょ");

    text = text.replace(/kka/g, "っか");
    text = text.replace(/kki/g, "っき");
    text = text.replace(/kku/g, "っく");
    text = text.replace(/kke/g, "っけ");
    text = text.replace(/kko/g, "っこ");

    text = text.replace(/ssa/g, "っさ");
    text = text.replace(/sshi/g, "っし");
    text = text.replace(/ssu/g, "っす");
    text = text.replace(/sse/g, "っせ");
    text = text.replace(/sso/g, "っそ");
    text = text.replace(/tta/g, "った");
    text = text.replace(/cchi/g, "っち");
    text = text.replace(/ttu/g, "っつ");
    text = text.replace(/tte/g, "って");
    text = text.replace(/tto/g, "っと");
    text = text.replace(/hha/g, "っは");
    text = text.replace(/hhi/g, "っひ");
    text = text.replace(/ffu/g, "っふ");
    text = text.replace(/hhe/g, "っへ");
    text = text.replace(/hho/g, "っほ");
    text = text.replace(/mma/g, "っま");
    text = text.replace(/mmi/g, "っみ");
    text = text.replace(/mmu/g, "っむ");
    text = text.replace(/mme/g, "っめ");
    text = text.replace(/mmo/g, "っも");
    text = text.replace(/yya/g, "っや");
    text = text.replace(/yyu/g, "っゆ");
    text = text.replace(/yyo/g, "っよ");
    text = text.replace(/rra/g, "っら");
    text = text.replace(/rri/g, "っり");
    text = text.replace(/rru/g, "っる");
    text = text.replace(/rre/g, "っれ");
    text = text.replace(/rro/g, "っろ");
    text = text.replace(/wwa/g, "っわ");
    text = text.replace(/gga/g, "っが");
    text = text.replace(/ggi/g, "っぎ");
    text = text.replace(/ggu/g, "っぐ");
    text = text.replace(/gge/g, "っげ");
    text = text.replace(/ggo/g, "っご");
    text = text.replace(/zza/g, "っざ");
    text = text.replace(/jji/g, "っじ");
    text = text.replace(/zzu/g, "っず");
    text = text.replace(/zze/g, "っぜ");
    text = text.replace(/zzo/g, "っぞ");
    text = text.replace(/dda/g, "っだ");
    text = text.replace(/dde/g, "っで");
    text = text.replace(/ddo/g, "っど");
    text = text.replace(/bba/g, "っば");
    text = text.replace(/bbi/g, "っび");
    text = text.replace(/bbu/g, "っぶ");
    text = text.replace(/bbe/g, "っべ");
    text = text.replace(/bbo/g, "っぼ");
    text = text.replace(/ppa/g, "っぱ");
    text = text.replace(/ppi/g, "っぴ");
    text = text.replace(/ppu/g, "っぷ");
    text = text.replace(/ppe/g, "っぺ");
    text = text.replace(/ppo/g, "っぽ");

    text = text.replace(/wa/g, "わ");
    text = text.replace(/wo/g, "を");
    text = text.replace(/ra/g, "ら");
    text = text.replace(/ri/g, "り");
    text = text.replace(/ru/g, "る");
    text = text.replace(/re/g, "れ");
    text = text.replace(/ro/g, "ろ");
    text = text.replace(/ya/g, "や");
    text = text.replace(/yu/g, "ゆ");
    text = text.replace(/yo/g, "よ");
    text = text.replace(/ma/g, "ま");
    text = text.replace(/mi/g, "み");
    text = text.replace(/mu/g, "む");
    text = text.replace(/me/g, "め");
    text = text.replace(/mo/g, "も");
    text = text.replace(/sa/g, "さ");
    text = text.replace(/shi/g, "し");
    text = text.replace(/tsu/g, "つ");
    text = text.replace(/su/g, "す");
    text = text.replace(/se/g, "せ");
    text = text.replace(/so/g, "そ");
    text = text.replace(/ta/g, "た");
    text = text.replace(/chi/g, "ち");
    text = text.replace(/te/g, "て");
    text = text.replace(/to/g, "と");
    text = text.replace(/ha/g, "は");
    text = text.replace(/hi/g, "ひ");
    text = text.replace(/fu/g, "ふ");
    text = text.replace(/he/g, "へ");
    text = text.replace(/ho/g, "ほ");
    text = text.replace(/na/g, "な");
    text = text.replace(/ni/g, "に");
    text = text.replace(/nu/g, "ぬ");
    text = text.replace(/ne/g, "ね");
    text = text.replace(/no/g, "の");
    text = text.replace(/ka/g, "か");
    text = text.replace(/ki/g, "き");
    text = text.replace(/ku/g, "く");
    text = text.replace(/ke/g, "け");
    text = text.replace(/ko/g, "こ");
    text = text.replace(/ga/g, "が");
    text = text.replace(/gi/g, "ぎ");
    text = text.replace(/gu/g, "ぐ");
    text = text.replace(/ge/g, "げ");
    text = text.replace(/go/g, "ご");
    text = text.replace(/za/g, "ざ");
    text = text.replace(/ji/g, "じ");
    text = text.replace(/zu/g, "ず");
    text = text.replace(/ze/g, "ぜ");
    text = text.replace(/zo/g, "ぞ");
    text = text.replace(/da/g, "だ");
    text = text.replace(/de/g, "で");
    text = text.replace(/do/g, "ど");
    text = text.replace(/ba/g, "ば");
    text = text.replace(/bi/g, "び");
    text = text.replace(/bu/g, "ぶ");
    text = text.replace(/be/g, "べ");
    text = text.replace(/bo/g, "ぼ");
    text = text.replace(/pa/g, "ぱ");
    text = text.replace(/pi/g, "ぴ");
    text = text.replace(/pu/g, "ぷ");
    text = text.replace(/pe/g, "ぺ");
    text = text.replace(/po/g, "ぽ");

    text = text.replace(/fa/g, "ふぁ");
    text = text.replace(/fi/g, "ふぃ");
    text = text.replace(/fe/g, "ふぇ");
    text = text.replace(/fo/g, "ふぉ");

    text = text.replace(/a/g, "あ");
    text = text.replace(/i/g, "い");
    text = text.replace(/u/g, "う");
    text = text.replace(/e/g, "え");
    text = text.replace(/o/g, "お");
    text = text.replace(/n/g, "ん");

    text = text.replace(/\./g, "。");
    text = text.replace(/,/g, "、");
    text = text.replace(/-/g, "");
    text = text.replace(/ /g, "");

    return text;
}

function makeLine(text) {
    let characters = text.split('');
    let p = createP();
    let index = 0;

    p.elt.style.left = Math.random() * 110 - 5 + 'vw';

    let interval = setInterval(() => {
        if (index < characters.length) {
            let span = document.createElement('span');
            span.textContent = characters[index];
            span.classList.add('initial');
            if (characters[index] == "。" || characters[index] == "、") {
                span.classList.add('dot');
            }
            p.elt.appendChild(span);
            setTimeout(() => {
                span.classList.add('transition');
                setTimeout(() => {
                    span.style.color = 'black';
                }, 2000);
            }, 100);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 100);
}

function setup() {

    let factor = Math.floor(window.innerWidth / 10);

    let inputText = `Doitsu Taishikan ha Nihon ni arimasu. Soko ni ha gaikokujin no gakusei mo imasu. Watashi ha Toukyou Denki no bengoshi desu. Watashi no namae ha Yamamoto desu. Watashi ha Doitsu kara kimashita. Watashi ha Toukyou de shigoto shite imasu. Bengoshi no hataraki ha totemo isogashii desu. Nihongo no benkyou ha muzukashii kedo, tanoshii desu. Watashi no tanjoubi ha Rokugatsu Juukyuu-nichi desu. Nihon de shigoto o hajimeta kara, Nihon-go ga jouzu ni naritai desu. Getsuyoubi kara kin'yuu no kaigi ga arimasu. Watashi ha kaigi no junbi o shimasu. Oosaka e no shinkansen ni noru koto ni narimashita. Watashi no tanoshii hobi ha gorufu desu. Getsuyoubi no yuugata ni takushiiya e ikimashita. Watashi no ie ha Toukyou ni arimasu. Ie no chikaku ni kouen ga arimasu. Natsu niwa koko ni sunde imasu. Kaeru toki ni, yoku depaato ni iku koto ga arimasu. Watashi no ie no mae ni ha kouban ga arimasu. Watashi no chichi ha ginkou no kaishain desu. Chichi ha totemo isogashii hito desu. Ashita ha chichi no tanjoubi desu. Watashi ha chichi ni purezento o agemasu. Chichi ha Igirisu-jin desu kara, kurisumasu ni ie ni kaerimasu. Watashi no haha ha koukaisha no byouin de hataraki o shite imasu. Haha no tanoshii toki ha shuumatsu desu. Kaisha no byouin no chikaku ni kouen ga arimasu. Haha ha eiga no fan desu. Watashi no tomodachi ha Nihon-jin desu. Tomodachi ha gakkou no sensei desu. Watashi no senpai ha gakusei desu. Senpai ha Toukyou Daigaku ni imasu. Senpai ha Nihongo ga jouzu desu. Senpai ha eiga ga suki desu. Watashi no kanojo ha ookina gakkou de benkyou shite imasu. Watashi no musume ha gakkou ni iku you ni nattara, totemo ureshii desu. Watashi no shigoto ha ookina kaisha de hataraki o shite imasu. Shigoto ha totemo muzukashii desu. Watashi no kaimono ha yoku depaato ni iku koto desu. Kaimono no toki ni, yoku tabemono o kaimasu. Kaimono no ato ni ha yoku uchi de yasumimasu. Watashi no ie ni ha neko ga imasu. Neko ha totemo kawaii desu. Neko ha yoku nemasu. Watashi ha neko ga daisuki desu. Watashi no ie ni ha inu mo imasu. Inu ha totemo genki desu. Inu ga iru toki ni, totemo ureshii desu.`;
    //let inputText = `In den malerischen Hügeln des Schwarzwaldes liegt das kleine Dorf Hinterwald. Umgeben von dichten Wäldern und sanften Wiesen, ist es ein Ort der Ruhe und Erholung. Die Einwohner leben in Harmonie mit der Natur und pflegen alte Traditionen.Jeden Morgen erwacht das Dorf zum Klang der Kirchenglocken. Die Dorfbewohner gehen ihren täglichen Aufgaben nach: Die Bauern bringen ihre Kühe auf die Weide, die Bäcker bereiten frisches Brot zu, und die Kinder machen sich auf den Weg zur Schule. Im Sommer versammeln sich die Dorfbewohner auf dem Marktplatz, um das alljährliche Dorffest zu feiern. Es gibt Musik, Tanz und natürlich reichlich Essen und Trinken. Die Kinder tollen auf der Wiese herum, während die Erwachsenen sich unterhalten und das schöne Wetter genießen. Im Herbst färben sich die Blätter der Bäume golden und rot, und die Luft wird frisch und klar. Die Dorfbewohner sammeln fleißig Kastanien und Pilze im Wald und bereiten sich auf den Winter vor. Wenn der erste Schnee fällt, verwandelt sich Hinterwald in eine märchenhafte Winterlandschaft. Die Kinder bauen Schneemänner und rodeln den Hügel hinunter, während die Erwachsenen sich am warmen Kaminfeuer entspannen. Das Leben in Hinterwald mag einfach sein, aber es ist erfüllt von Liebe, Gemeinschaft und Verbundenheit mit der Natur. Es ist ein Ort, den man nie vergessen wird.`;
    feedText(inputText);

    generatedSentences = generateSentences("Watashi", factor);
    //generatedSentences = generateSentences("Die", factor);
    generatedSentences.forEach(sentence => {
        setTimeout(() => {
            makeLine(sentence);
        }, Math.random() * factor * 100);
    });
}