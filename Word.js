// imports constructor structure from Letter.js
var Letter = require("./Letter.js");

function Word(word) {
    this.array = word.split("").map(l => new Letter(l));
    this.display = function() {
        var wordDisplay = [];
        this.array.forEach(i => {wordDisplay.push(i.shows())});
        return wordDisplay.join(" ");
    }
    this.guess = function(character) {
        this.array.forEach(i => {i.guessedC(character)});
        this.display();
    }    
}

module.exports = Word;