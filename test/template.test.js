const { checkIfNumberIsOnCard, extractNumberFromString} = require('../src/template');

describe('When checking whether a number is on a card, we first want to extract the number from the letter/number combination ', () => {
    it('B1 --> 1', () => {
        expect(extractNumberFromString("B1")).toEqual(1);    
    });
    it('IOO15 --> 15', () => {
        expect(extractNumberFromString("IOO15")).toEqual(15);
    });
});

describe('We have to check if a number is present on the card', () => {
    const card = [
        ['B', 'I', 'N', 'G', 'O'],
        [1, 16, 31, 46, 61],
        [3, 18, 33, 48, 63],
        [5, 20, 'FREE SPACE', 50, 65],
        [7, 22, 37, 52, 67],
        [9, 24, 39, 54, 69]
    ]
    it('B1 --> true', () => {
        const number = 'B1'
        expect(checkIfNumberIsOnCard(card, number)).toEqual(true);        
    });
    it('I16 --> true', () => {
        const number = 'I16'
        expect(checkIfNumberIsOnCard(card, number)).toEqual(true);
    });
});