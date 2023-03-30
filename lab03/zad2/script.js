const root = document.documentElement;
const aside = document.querySelector('aside');
const body = document.body;
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const blockquotes = document.querySelectorAll('main blockquote');
const h1 = document.querySelector('h1');
const azureElements = document.querySelectorAll(".azure");
const elements = document.querySelectorAll('.shadows');
const blockquote = document.querySelector('blockquote'); 
const addButton = document.getElementById("add-button");
const deleteButton = document.getElementById("delete-button");
const setButton = document.getElementById("set-button");

addButton.addEventListener("click", e => {addSentence(e);})
deleteButton.addEventListener("click", e => {deleteStyles(e);})
setButton.addEventListener("click", e => {setStyles(e);})

function setStyles(e) {
    root.style.setProperty('--text-color-initial', 'palevioletred');
    root.style.setProperty('--text-color-final', 'rgb(86, 177, 175)');
    aside.style.width = '29.7em';
    aside.style.float = 'right';
    body.style.padding = '0.625em';
    main.style.width = '31.25em';
    main.style.clear = 'left';
    main.style.marginBottom = '0.625em';
    nav.style.width = 'max-content';
    nav.style.float = 'left';
    blockquotes.forEach(blockquote => {
      blockquote.style.margin = '0';
      blockquote.style.fontFamily = "'Courier New', Courier, monospace";
    });
    azureElements.forEach((element) => {
      element.style.backgroundColor = "#EFF";
    });
    h1.style.animation = 'colorChange 1.5s infinite alternate';
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.boxShadow = '0 0 0.3em #A8A8A8';
      elements[i].style.border = '0.03em solid #A8A8A8';
      elements[i].style.padding = '0.625em 0.625em';
    }
    for (let i = 0; i < body.children.length; i++) {
        body.children[i].style.marginBottom = '1.25em';
    }
  }
  
function deleteStyles(e) {
    document.querySelectorAll('*').forEach(element => {
        element.className = "";
        element.removeAttribute('style');
    });
}

const text = ["Natenczas Wojski chwycił na taśmie przypięty", 
"Swój róg bawoli, długi, cętkowany, kręty",
 "Jak wąż boa, oburącz do ust go przycisnął,", 
 "Wzdął policzki jak banię, w oczach krwią zabłysnął,", 
 "Zasunął wpół powieki, wciągnął w głąb pół brzucha", 
 "I do płuc wysłał z niego cały zapas ducha,", 
 "I zagrał: róg jak wicher, wirowatym dechem", 
 "Niesie w puszczę muzykę i podwaja echem.", 
 "<br>", 
 "Umilkli strzelcy, stali szczwacze zadziwieni", 
 "Mocą, czystością, dziwną harmoniją pieni.", 
 "Starzec cały kunszt, którym niegdyś w lasach słynął,",
  "Jeszcze raz przed uszami myśliwców rozwinął;", 
  "Napełnił wnet, ożywił knieje i dąbrowy,", 
  "Jakby psiarnię w nie wpuścił i rozpoczął łowy.", 
  "<br>", 
  "Bo w graniu była łowów historyja krótka:", 
  "Zrazu odzew dźwięczący, rześki: to pobudka;",
  "Potem jęki po jękach skomlą: to psów granie;",
  "A gdzieniegdzie ton twardszy jak grzmot: to strzelanie."]


let i = 0;
function addSentence(e) {
  if (i == text.length) {
    addButton.disabled = true;
    return;
  }
  let sentence = text[i];
  if (sentence === '<br>') { // if the sentence is a line break, create and append a new line break element
    blockquote.appendChild(document.createElement('br'));
  } else { // otherwise, create and append a new paragraph element with the sentence as its content
    const p = document.createElement('p');
    p.textContent = sentence;
    blockquote.appendChild(p);
  }
  i++;
}