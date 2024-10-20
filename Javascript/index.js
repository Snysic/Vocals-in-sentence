function getSentence(sentence) {
    return sentence;
}
function searchVocals(sentence){
    const vocals = ['a', 'e', 'i', 'o', 'u'];
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
function getVocals(list) {
    let vocalsList = deleteDuplicity(list);
    return vocalsList.join(','); 
}
