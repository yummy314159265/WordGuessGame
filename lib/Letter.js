// to find out what's necessary for the Letter class, 
// look through Letter.test.js and game.js for Letter functions

class Letter {
    
    // takes a letter argument. use regex(/[a-z0-9]/gi) from Game.js (incorrectly written in Game.js, needs to be from 0-9 not 1-9)
    // regex matches char to any character from a-z and any number from 0-9
    // if it matches, its visible property is false, otherwise it is visible
    // that means any space will not be turned into an underscore, as well as any punctuation or special characters
    constructor (letter) {
        const valid = /[a-z0-9]/gi;
        this.char = letter;  
        if (valid.test(this.char)) {
            this.visible = false; 
        } else {
            this.visible = true;
        }
    }

    // String() forces this.char into a String object, rather than a Letter object. 
    // if you do not force String type, it will not be strictly equal to guessedLetter
    guess (guessedLetter) {
        if (String(this.char).toLowerCase() === guessedLetter.toLowerCase()) {
            this.visible = true;
        }

        return this.visible;
    }

    toString() {
        if (!this.visible) {
            return '_';
        } else {
            return String(this.char);
        }
    }

    getSolution() {
        return String(this.char);
    }
}

module.exports = Letter;
