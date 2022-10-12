function checkIfNumberIsOnCard(card, number) {
    numberWithoutTheLetter = number.substring(1,2)
    return card[1][0] == numberWithoutTheLetter
}

module.exports = checkIfNumberIsOnCard