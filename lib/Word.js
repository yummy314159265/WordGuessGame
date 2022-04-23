const Letter = require("./Letter");

class Word {
    
    constructor (word) {
        this.word = word;
        this.letters = word.split('').map(letter => new Letter(letter));
        this.correctGuesses = 0;
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
        let correct = 0
        this.letters.forEach(letter => {
            if(letter.visible) {
                correct++;
            }
        })

        if (correct === this.letters.length) {
            return true;
        }

        return false;
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
