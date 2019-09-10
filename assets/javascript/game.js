var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guess = 0;
var wins = 0;
var losses = 0;
var turns = 0;

var directionsText = document.getElementById("directions");
var userGuessText = document.getElementById("user-choice");
var computerChoicesText = document.getElementById("computerChoices");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var turnsText = document.getElementById("turns");

document.onkeyup = function(event) {

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

    var userGuess = event.key;


    if (userGuess == computerGuess) {
        wins++;
        turns = "";
        guess = "";

    } else if (userGuess !== computerGuess) {
        turns++;
        guess += userGuess + ", ";
    }

    if (turns == 0) {
        losses++;
        turns = "";
        guess = "";
    }



    directionsText.textContent = "";
    userGuessText.textContent = "You chose: " + userGuess;
    computerChoicesText.textContent = "Computer chose: " + computerGuess;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    turnsText.textContent = "Turns: " + turns;
};