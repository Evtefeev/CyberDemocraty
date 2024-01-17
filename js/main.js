async function readTextFile(file) {
  const response = await fetch(file);
  const text = await response.text();
  res = text.replaceAll("\n", "<br>");
  return res;
}



// Store your translations in an array
const translations = [
  "EN",
  "UA",
  "RU",
];

const files = {
  "EN": "res/en.txt",
  "UA": "res/ua.txt",
  "RU": "res/ru.txt",
};

let currentTranslationIndex = -1;
changeTranslation();

function changeTranslation() {
  const mainText = document.getElementById("main-text");
  currentTranslationIndex = (currentTranslationIndex + 1) % translations.length;
  const button = document.getElementById("translate-button");
  button.innerText = translations[currentTranslationIndex];
  readTextFile(files[translations[currentTranslationIndex]]).then(text => {
    mainText.innerHTML = text;
  })


}