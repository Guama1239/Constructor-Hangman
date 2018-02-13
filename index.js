
var inquirer = require("inquirer");
var chalk = require("chalk");


// imports from Word.js
var Word = require("./Word.js");
// Array of all words that can be chosen
var wordArray = ["genesis", "madonna", "toto", "queen", "u2", "metallica", "journey", "inxs", "poison", "rush", "blondie", "police"];
var guessCounter;
var wordInPlay;
var newordObj;
var correctHits = [];

var restartGame = function () {
    wordInPlay = wordArray[Math.floor(Math.random() * wordArray.length)];
    newordObj = new Word(wordInPlay);
    guessCounter = 8;
    correctHits = [];
    hangmanGame();    
}
//  play game
var hangmanGame = function () {
        inquirer.prompt([
        {
            name: "guess",
            message: newordObj.display()
                + `\n Guess:  `,
            type: "input",
        }
    ]).then((answer) => {
        newordObj.guess(answer.guess);
        var hitOne = null;
        newordObj.array.forEach(e => {
            if (e.letter === answer.guess) {
                hitOne = true;
                correctHits.push(e.letter);
            }
        });
        if (hitOne === true) {
            console.log("CORRECT !!!")
        } else {
            guessCounter--;
            console.log("INCORRECT!!!");
            console.log("\n",guessCounter, " guesses remaining !!!")
        }
        if (guessCounter > 0) {
            if (correctHits.length === wordInPlay.length) {
                console.log("You got it right!!  Next word!!")
                restartGame();
            } else {
                hangmanGame();
            }
        } else {
            console.log("You reached the guess limit!!! the easy word was: " +wordInPlay+  "   Next word, try harder!!!!")
            restartGame();
        }
    });
};

wordInPlay = wordArray[Math.floor(Math.random() * wordArray.length)];
newordObj = new Word(wordInPlay);
guessCounter = 8;
correctHits = [];
hangmanGame();