//constructor function used to create Letter objects
function Letter (letter) {
    this.letter = letter;
    this.correctG = false;
    this.shows = function () {
        if (this.correctG) {
            return this.letter;
        } else { 
            return "_";}
    };
    this.guessedC = function (character) {
        if (character === this.letter) {
            return this.correctG = true;
        }
    }
}

module.exports = Letter;
