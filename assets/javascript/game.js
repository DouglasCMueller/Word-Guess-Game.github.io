
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
var correctGuessCounter = 0;

//Game stats
var wins = 0;
var losses = 0;
var guessesRemaining = 10;


//function that starts a new game
function startGame() {

    //chose random word from array

var chosenWord = presidentLastName[Math.floor(Math.random() * presidentLastName.length)];
console.log ("The current chosen word is: " + chosenWord);
for (var k=0; k<chosenWord.length; k++)
{ 
numberBlanks.push("_");
}
console.log(numberBlanks);
$("#guessesRemaining").text(guessesRemaining);


function winOrlose(){
    if (correctGuessCounter === chosenWord.length){
        alert("You win!");
    }
        else if(guessesRemaining === 0){
        alert("You Lose!");
    }
}
 document.onkeyup = function(event)
 {
    $("#underscoredWord").text(numberBlanks);
     userGuess=event.key;
   
     guessesRemaining --;
     $("#guessesRemaining").text("Guesses remaining " + guessesRemaining);
     console.log(guessesRemaining)
     console.log(userGuess)
     if(chosenWord.indexOf(userGuess) > -1){
            for(var i=0;i < chosenWord.length; i++){
                if(chosenWord[i] === userGuess){
                    numberBlanks[i] =userGuess;
                    console.log(numberBlanks);
                    correctGuessCounter++;
                    winOrlose();
                    
                }
            }
     }
     else {
         wrongLetter.push(userGuess);
         console.log("Wrong Letter array " + wrongLetter);
         console.log("Guesses Remaining " + guessesRemaining);
         $("#guessedLetters").text(wrongLetter);
         winOrlose();

     }
 }
}
 

startGame ();
 
 });