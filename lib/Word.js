const Letter = require("./Letter");

// to find out what's necessary for the Word class, 
// look through Word.test.js and game.js for Word functions

class Word {
    // the word constructor takes a string argument and creates an array of Letter objects from it
    constructor (word) {
        this.letters = word.split('').map(letter => new Letter(letter));
    }

    // Word.toString() calls the Letter.toString() function on every Letter in the this.letters array, then returns a joined string from that array
    toString() {
        const hiddenWord = this.letters.map(letter => letter.toString());
        return hiddenWord.join('');
    }

    // Word.getSolution() does a similar thing to toString(), but returns a fully visible string rather than a hidden string
    getSolution() {
        const solution = this.letters.map(letter => letter.getSolution());
        return solution.join('');
    }

    // returns true if every letter is visible using Array.prototype.every()
    guessedCorrectly() {
        return this.letters.every(letter => letter.visible === true);
    }

    // first calls Letter.guess() on every Letter in this.letters, then checks if it returns true. 
    // if it returns true on any Letter, changes correctGuess from false to true. returns correctGuess
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
