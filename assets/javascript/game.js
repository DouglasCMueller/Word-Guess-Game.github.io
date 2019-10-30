
$(document).ready(function() {

//Variables defined
var presidentLastName = [
    "Trump",
    "Obama",
    "Clinton",
    "Reagan",
    "Carter",
    "Ford",
    "Nixon",
    "Johnson",
    "Kennedy",
    "Eisenhower"
];
//empty variable to store current word to be guessed as a string
var chosenWord ="";
//empty variable to hold the actual letters in the chosenWord
var chosenWordLetters =[];
//variable that holds the number of blanks "_" in the currentWord
var numberBlanks = [];
//variable that holds the answer in blanks form
var answerArray = [];

//variable that is actual word in blanks formatted, this will change as letters are guessed correctly
var answerDisplay = [];
//answerDisplay represented as a string
var answerString = "";
//variable that stores userGuess
var userGuess = [];
//empty array that holds all the wrong guesses
var wrongLetter = [];
//counter for correct letters in the chosenWord
var correctLetter = 0;

//Game stats
var wins = 0;
var losses = 0;
var guessesRemaining = 10;

//functions
//function that starts a new game

function startGame(){
    //chose random word from array

var chosenWord = presidentLastName[Math.floor(Math.random() * presidentLastName.length)];
console.log ("The current chosen word is: " + chosenWord);
//grab chosen word and break it into individual letters
chosenWordLetters = chosenWord.split("");
console.log ("The chosen word letters are: " + chosenWordLetters);
//grab chosen word and get number of letters in it
numberBlanks = chosenWordLetters.length;
console.log ("The number of letters in chosen word is: " + numberBlanks);
//add correct number of blanks to answerDisplay that corresponds with the length of the chosenWord
for (i = 0; i< numberBlanks; i++) {
    answerArray.push("_");
}
startGame();
console.log(answerArray)
function winOrLoseTheGame {
    if (correctLetter = chosenWord.length) {
        alert ("You win!");
        //display president full name
//display president photo where current hangman image is located
//play president sound-bite

    }
    else if(guessesRemaining < 1){
        alert("You lose!")
    }
}

//create final answerDisplay of blanks
answerDisplay=answerArray.join(" ");
console.log(answerDisplay);
function buttonClickToStart() {
     
//create loop for game play ending if guessesRemaining is zero
for (l = 0; l>guessesRemaining; l--) {

//capture user typed letter
document.onkeyup = function(event)
{
    userGuess=event.key;
    guessesRemaining -1;
    console.log(guessesRemaining)
    console.log(userGuess)

    //check if letter already guessed incorrectly

if (wrongLetter.indexOf(userGuess) === userGuess){
    alert("You already guessed" + userGuess);
    guessesRemaining+1;

//compare guessed letter to chosenWord letters

    for(var j=0; j<chosenWord.length; j++)
    {
        if(chosenWordLetters[j]=== userGuess)
            {
        //push user letter guessed to answerDisplay 
        answerDisplay[j] = userGuess;
        console.log(answerDisplay);
        correctLetter++;
        winTheGame();
    }
    else if{
    //push incorrect letter to wrongLetter array
     wrongLetter.push(userGuess);
    console.log (wrongLetter);
  }
    }
}
}
 });