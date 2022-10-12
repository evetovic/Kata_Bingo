function checkIfNumberIsOnCard(card, number) {
    var numberWithoutTheLetter = extractNumberFromString(number);
    return card[1].includes(numberWithoutTheLetter);
}

function extractNumberFromString(number) {
    return parseInt(number.replace(/[^0-9\.]+/g, ""));
}


module.exports = { checkIfNumberIsOnCard, extractNumberFromString}