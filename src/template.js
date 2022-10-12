function translateNumberToLetter(number) {
    return String.fromCharCode(number + 64);
}

function translateListOfNumbersToLetters(numbers) {
    let letters = [];
    for (number of numbers) {
        letters.push(translateNumberToLetter(number));
    }
    return letters;
}

function isLetterInList(letterToFind, letters) {
    if (letters.indexOf(letterToFind) === -1) {
        return false
    }
    return true
}

module.exports = {
    translateNumberToLetter,
    translateListOfNumbersToLetters,
    isLetterInList
}