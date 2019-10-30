
$(document).ready(function()  {
    $("#presidentName").hide;
});

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
var chosenWord =[];
var chosenWordLetters =[];
var numberBlanks = [];
var answerArray = [];
var answerDisplay = [];
var userGuess = [];
var guessesRemaining = 10;
var wrongLetter = [];
var underScores = [];
var userWins = 0;


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
console.log(answerArray)
//create final answerDisplay of blanks
answerDisplay=answerArray.join(" ");
console.log(answerDisplay);






//capture user typed letter
document.onkeyup = function(event)
{
    userGuess=event.key;
    console.log(userGuess)
    //check if letter already guessed incorrectly

if (wrongLetter.indexOf(userGuess) === userGuess){
    alert("You already guessed" + userGuess);


//compare guessed letter to chosenWord letters
if (chosenWordLetters.indexOf(userGuess) > -1)
{
    for(var j=0; j<chosenWord.length; j++)
    {
        if(chosenWord[j]=== userGuess)
            {
        //push user letter guessed to underscores index
        underScores[j] = userGuess;
        console.log(underScores);
    }

        else{
    //push incorrect letter to wrongLetter array
     wrongLetter.push(userGuess);
    //reduce user guesses by 1
    guessesRemaining--;
  }
}
} 
//game over 
if (underScores.join === chosenWord){
    //add 1 to user wins total
userWins++;
//display president full name
//display president photo where current hangman image is located
//play president sound-bite

}

console.log(wrongLetter);
console.log(userGuesses);
console.log(underScores);
}
}
