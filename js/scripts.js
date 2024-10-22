//primero
const word = "Macarena";
console.log(word.toUpperCase(word.length > 5));
console.log(word.toLowerCase(word.length < 5));

//segundo
function randomLetter(word) {
  const randomPosition = Math.floor(Math.random() * word.length);

  console.log(word.charAt(randomPosition));
}

randomLetter("Macarena");
randomLetter("Ordenador");

//tercero
function compareWords(word1, word2) {
  if (word1.length > word2.length) {
    return word1;
  } else if (word1.length < word2.length) {
    return word2;
  } else {
    return "Tienen la misma longitud";
  }
}

const compare = compareWords("corta", "larguisima");
const compare2 = compareWords("larguita", "cor");
const compare3 = compareWords("mac", "cam");

console.log(compare);
console.log(compare2);
console.log(compare3);

//cuarto

function generateWord(word1, word2, word3) {
  const randomPositionWord1 = Math.floor(Math.random() * word1.length);
  const randomPosition2Word1 = Math.floor(Math.random() * word1.length);

  const randomPositionWord2 = Math.floor(Math.random() * word2.length);
  const randomPosition2Word2 = Math.floor(Math.random() * word2.length);

  const randomPositionWord3 = Math.floor(Math.random() * word3.length);
  const randomPosition2Word3 = Math.floor(Math.random() * word3.length);

  console.log(
    word1.charAt(randomPositionWord1) +
      word1.charAt(randomPosition2Word1) +
      word2.charAt(randomPositionWord2) +
      word2.charAt(randomPosition2Word2) +
      word3.charAt(randomPositionWord3) +
      word3.charAt(randomPosition2Word3)
  );
}

const resultWord = generateWord("Hola", "macarena", "adios");
const resultWord2 = generateWord("Alfredo", "Macarena", "Siena");

//quinto

function checkDomain(email) {
  const atPosition = email.indexOf("@");
  const userName = email.substring(0, atPosition);
  const domain = email.substring(atPosition + 1);

  console.log("El usuario es " + userName);
  console.log("El dominio es " + domain);
}

checkDomain("macarena@gmail.com");

//sexto

function capitalLetters(word) {
  const capitalL =
    word.charAt(0).toUpperCase() +
    word.charAt(1).toLowerCase() +
    word.charAt(3).toUpperCase() +
    word.charAt(4).toLowerCase();

  console.log(capitalL);
}

capitalLetters("adios");

//seven

function userName(name, surnames) {
  const name1 = name.charAt(0) + surnames;
  const number = Math.round(Math.random() * 101);

  console.log(name1 + number);
}

userName("Macarena", "Carrero");

//ocho

function invertedWords(word) {
  const order =
    word.charAt(3) + word.charAt(2) + word.charAt(1) + word.charAt(0);

  return order;
}
const order = invertedWords ("maca")
console.log(order)

//nueve

function wordsSize(word1, word2, word3) {
  const addition = word1.length + word2.length + word3.length;

  console.log(addition);
}

wordsSize("hola", "siguiente", "adios");

//diez

function titleFormat(title) {
  const capitalLetters = title.charAt(0).toUpperCase();
  const spacePosition = title.indexOf(" ");
  const capitalLetters2 = title.charAt(spacePosition + 1).toUpperCase();
  const restFirstWord = title.substring(1, spacePosition);
  const restSecondWord = title.substring(spacePosition + 2);

  console.log(
    capitalLetters + restFirstWord + " " + capitalLetters2 + restSecondWord
  );
}
titleFormat("Érase una");
titleFormat("hola macarena");

//once


function onlyInitials(word1, word2){
const initial = word1.charAt(0).toUpperCase();
const secondInitial =word2.charAt(0).toUpperCase();

console.log (initial + "." + secondInitial +".")

}

onlyInitials("Macarena", "Carrero")
onlyInitials("maca", "fernandez")

//doce

function wordLenghth (word1, word2, word3){ 
  const halfLength = (word1.length + word2.length + word3.length) /3;

  console.log(halfLength)
}

wordLenghth("gatito", "perrito", "pet")
wordLenghth("osoito", "abeja", "leon")

//trece

function phoneNumber (number){
  const firstDigits = number.substring(0,2)
  const secondDigits = number.substring(2,5)
  const thirdDigits= number.substring(5,10)

  console.log ("("+ firstDigits+")"+" "+secondDigits+"-"+ thirdDigits)
}

phoneNumber("9187232513")

//ochoverdadero

function verb(word1, word2){}