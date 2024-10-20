const word= "Macarena";
console.log(word.toUpperCase(word.length >5));
console.log(word.toLowerCase(word.length <5));

const rLetter= "Macarena";
console.log(rLetter.charAt(Math.random()*9));

function compareWords(word1, word2){ 
    if (word1.length > word2.length){
        return "word1"
    }else if (word1.length < word2.length){
        return "word2"
    }else{
        return "Tienen la misma longitud"
    }
}

const compare=("corta", "larguisima")
const compare2=("larguita", "cor")
const compare3=("mac", "cam")

console.log(compare)
console.log(compare2)
console.log(compare3)

// he probado a ponerlo arriba y abajo y no me sale la opcion de las 2 son iguales



