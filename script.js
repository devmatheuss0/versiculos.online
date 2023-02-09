const texts = [
  "2 Corintios 5:7",
  "João 3:16",
  "Gênesis 26:12",
  "Exodo 3:14",
  "Salmos 56:11",
  "2 Crônicas 7:14",
  "Salmos 4:4",
  "Salmos 4:8",
  "Provérbios 4:1",
  "Isaías 54:17",
  "Mateus 10:39",
  "João 12:47",

  // Adicione quantos textos quiser aqui
];

const button = document.getElementById("yes");
const textElement = document.getElementById("verstxt");

let currentText = 0;

const typeWriter = (text, i, fnCallback) => {
  if (i < text.length) {
    textElement.innerHTML = text.substring(0, i+1) + "_";
    setTimeout(() => {
      typeWriter(text, i + 1, fnCallback)
    }, 100);
  } else if (typeof fnCallback == 'function') {
    textElement.innerHTML = text;
    fnCallback();
  }
};

button.addEventListener("click", () => {
  typeWriter(texts[currentText], 0, () => {
    currentText = (currentText + 1) % texts.length;
  });
});
const newTexts = [
  "Porque vivemos por fé, e não pelo que vemos.",
  "Porque Deus amou tanto o mundo que deu seu Filho único, para que todo o que nele crer não pereça, mas tenha a vida eterna.",
  "Naquele ano, quando Isaque plantou lavouras, colheu cem vezes mais cereais do que havia semeado, pois o S enhor o abençoou.",
  "Deus respondeu a Moisés: Eu Sou o que Sou. Diga ao povo de Israel: Eu Sou me enviou a vocês.",
  "E se o meu povo, que se chama pelo meu nome, se humilhar, e orar, e buscar a minha face e se converter dos seus maus caminhos, então eu ouvirei dos céus, e perdoarei os seus pecados, e sararei a sua terra.",
  "Perturbai-vos e não pequeis; falai com o vosso coração sobre a vossa cama, e calai-vos. (Selá.)",
  "Em paz também me deitarei e dormirei, porque só tu, Senhor, me fazes habitar em segurança.",
  "Ouvi, filhos, a instrução do pai, e estai atentos para conhecerdes a prudência.",
  "Toda a ferramenta preparada contra ti não prosperará, e toda a língua que se levantar contra ti em juízo tu a condenarás; esta é a herança dos servos do Senhor, e a sua justiça que de mim procede, diz o Senhor.",
  "Quem acha a sua vida a perderá, e quem perde a sua vida por minha causa a encontrará.",
  "Se alguém ouve as minhas palavras, e não as guarda, eu não o julgo. Pois não vim para julgar o mundo, mas para salvá-lo.",
  // Adicione quantos textos quiser aqui
];

const newButton = document.getElementById("yes");
const newTextElement = document.getElementById("paltxt");

let newCurrentText = 0;

const newTypeWriter = (text, i, fnCallback) => {
  if (i < text.length) {
    newTextElement.innerHTML = text.substring(0, i+1) + "_";
    setTimeout(() => {
      newTypeWriter(text, i + 1, fnCallback)
    }, 15);
  } else if (typeof fnCallback == 'function') {
    newTextElement.innerHTML = text;
    fnCallback();
  }
};

newButton.addEventListener("click", () => {
  newTypeWriter(newTexts[newCurrentText], 0, () => {
    newCurrentText = (newCurrentText + 1) % newTexts.length;
  });
});
