class Letter {
    
    constructor (letter) {
        const valid = /[a-z0-9]/gi;
        this.char = letter;  
        if (valid.test(this.char)) {
            this.visible = false; 
        } else {
            this.visible = true;
        }
    }

    guess (guessedLetter) {
        if (String(this.char).toLowerCase() === guessedLetter.toLowerCase()) {
            this.visible = true;
            return true;
        }

        return false;
    }

    toString() {
        if (!this.visible) {
            return '_'
        } else {
            return String(this.char)
        }
    }

    getSolution() {
        return String(this.char)
    }
}

module.exports = Letter;
