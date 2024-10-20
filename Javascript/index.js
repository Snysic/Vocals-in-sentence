funcion getSentence(sentence) {
    return sentence;
}


funcion searchVocals(sentence){
const vocals = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let foundVocals = [];

for (let char of sentence) {
    if (vocals.includes(char)) {
        foundVocals.push(char.toLowerCase());
    }
}
return foundVocals;
}

function deleteDuplicity(list) {
    return [...new Set(list)]; 
}




funcion getVocals(list)




