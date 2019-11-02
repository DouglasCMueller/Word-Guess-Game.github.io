$(document).ready(function() {

    //Variables defined
    var presidentLastName = [
        "trump",
        "obama",
        "clinton",
        "reagan",
        "carter",
        "ford",
        "nixon",
        "kennedy",
        "eisenhower",
        "johnson" 
    ];
    //empty variable to store current word to be guessed as a string
    var chosenWord ="";
    //variable that holds the number of blanks "_" in the currentWord
    var numberBlanks = [];
    var numberBlanksNoCommas  = [];
    //variable that holds chosen word as an array
    var chosenwordArray = [];
     //variable that stores userGuess
    var userGuess = [];
    //empty array that holds all the wrong guesses
    var wrongLetter = [];
    //Game stats
    var wins = 0;
    var losses = 0;
    var guessesRemaining = 10;
       
    //function for game start
    function startGame() {
    
    //chose random word from array
    var chosenWord = presidentLastName[Math.floor(Math.random() * presidentLastName.length)];
    console.log ("The current chosen word is: " + chosenWord);
    for (var k=0; k<chosenWord.length; k++){ 
    numberBlanks.push("_");
    }
   console.log(numberBlanks);
    $("#guessesRemaining").text(guessesRemaining);

   $("#underscoredWord").text(numberBlanks);
    var chosenwordArray = chosenWord.split("");
    console.log(chosenwordArray);
    console.log(numberBlanks);
    //function for win or lose
    function winOrLose(){
        if  (JSON.stringify(chosenwordArray)==JSON.stringify(numberBlanks)){
            console.log(chosenwordArray)==JSON.stringify(numberBlanks);
        // if (correctGuessCounter === chosenWord.length){
            if (chosenWord === "trump"){
                $("#winningMessage").text("Congratulations from the 45th President of the United States");
                $("#presidentName").text("Donald Trump");
                $("#mainImage").attr("src", "/assets/images/trump.jpg");
                $(".audioPlay").attr("src","assets/images/trumpInauguralAddress.mp3");
            }
            else if (chosenWord === "obama"){
                $("#winningMessage").text("Congratulations from the 44th President of the United States");
                $("#presidentName").text("Barack Obama");
                $("#mainImage").attr("src", "assets/images/obama.jpg");
            }
            else if (chosenWord === "clinton"){
                $("#winningMessage").text("Congratulations from the 42nd President of the United States");
                $("#presidentName").text("Bill Clinton");
                $("#mainImage").attr("src", "assets/images/clinton.jpg");
            }
            else if (chosenWord === "reagan"){
                $("#winningMessage").text("Congratulations from the 40th President of the United States");
                $("#presidentName").text("Ronald Reagan");
                $("#mainImage").attr("src", "assets/images/reagan.jpg");
            }
            else if (chosenWord === "carter"){
                $("#winningMessage").text("Congratulations from the 39th President of the United States");
                $("#presidentName").text("Jimmy Carter");
                $("#mainImage").attr("src", "assets/images/carter.jpg");
            }
            else if (chosenWord === "ford"){
                $("#winningMessage").text("Congratulations from the 38th President of the United States");
                $("#presidentName").text("Gerald Ford");
                $("#mainImage").attr("src", "assets/images/ford.jpg");
            }
            else if (chosenWord === "nixon"){
                $("#winningMessage").text("Congratulations from the 37th President of the United States");
                $("#presidentName").text("Richard Nixon");
                $("#mainImage").attr("src", "assets/images/nixon.jpg");
            }
            else if (chosenWord === "kennedy"){
                $("#winningMessage").text("Congratulations from the 35th President of the United States");
                $("#presidentName").text("John F. Kennedy");
                $("#mainImage").attr("src", "assets/images/kennedy.jpg");
            }
            else if (chosenWord === "eisenhower"){
                $("#winningMessage").text("Congratulations from the 34th President of the United States");
                $("#presidentName").text("Dwight D. Eisenhower");
                $("#mainImage").attr("src", "assets/images/eisenhower.jpg");
            }
            else if (chosenWord === "johnson"){
                $("#winningMessage").text("Congratulations from the 36th President of the United States");
                $("#presidentName").text("Lyndon B. Johnson");
                $("#mainImage").attr("src", "assets/images/johnson.jpg");
            }
        }
        else if (guessesRemaining <1){
            $("#winningMessage").text("You don't know your modern presidents! -- Reload the page to try again");
            
        }
    
    }
    console.log(guessesRemaining)
    //action after user makes a letter guess
     document.onkeyup = function(event)
    {
        userGuess=event.key;
        
       //if user enters letter already guessed wrong
        $("#guessesRemaining").text(guessesRemaining);
        guessesRemaining--;
        console.log(guessesRemaining);
        $("#guessesRemaining").text(guessesRemaining);
        console.log(guessesRemaining)
   if (wrongLetter.indexOf(userGuess) > -1){
            alert("You have already chosen that incorrect letter " + userGuess + " !");
            guessesRemaining++;
            $("#guessesRemaining").text(guessesRemaining);
        }
    
        else if(chosenWord.indexOf(userGuess) > -1){
          
            for(var i=0;i < chosenWord.length; i++){

              if(chosenWord[i] === userGuess){
                numberBlanks[i] =userGuess;
                $("#underscoredWord").text(numberBlanks);
                guessesRemaining++;
                $("#guessesRemaining").text(guessesRemaining);
                console.log(guessesRemaining)
                winOrLose();
              } 
            }
        }
        else {
         
            wrongLetter.push(userGuess);
            $("#guessedLetters").text(wrongLetter);
      
            winOrLose();
        
        }
    }
    
  }
startGame ();
});
