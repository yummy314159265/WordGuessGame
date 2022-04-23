const Letter = require("./Letter");

//TODO: make word subclass of letter
class Word {
    
    constructor (word) {
        this.letters = word.split('').map(letter => new Letter(letter));
    }

    toString() {
        const hiddenWord = this.letters.map(letter => letter.toString());
        return hiddenWord.join('')
    }

    getSolution() {
        const solution = []

        this.letters.forEach(letter => {
            solution.push(letter.getSolution());
        })

        return solution.join('');
    }

    guessedCorrectly() {
        return this.letters.every(letter => letter.visible === true)
    }

    guessLetter(letter) {
        let correctGuess = false;
        this.letters.forEach(char => {
            if (char.guess(letter)) {
                correctGuess = true;
            }
        })
        return correctGuess;
    }
}

module.exports = Word;
