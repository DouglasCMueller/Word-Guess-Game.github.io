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
var userGuess = [];
var guessesRemaining = 10;
var wrongLetter = [];
var underScores = [];
var userWins = 0;


//chose random word from array

var chosenWord = presidentLastName[Math.floor(Math.random() * presidentLastName.length)];
console.log (chosenWord);

//create blank array with "_"

var answerArray = [];
for (var i = 0; i < chosenWord.length; i++) {
 underScores.push("_");
}

//start game
//show the underscored answer in html document under text current word

console.log(underScores)
//capture user typed letter
document.onkeyup = function(event)
{
    userGuess=event.key;
    console.log(userGuess)
    //check if letter already guessed incorrectly

if (wrongLetter.indexOf(userGuess) === userGuess){
    alert("You already guessed" + userGuess);
}
console.log(guessesLeft)
//compare guessed letter to chosenWord letters
if (chosenWord.indexOf(userGuess) > -1)
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