


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


var answerArray = [];
for (var i = 0; i < presidentLastName.length; i++) {
 answerArray[i] = " _ ";
}
function myFunction() {
    document.getElementById("openingStatement").innerHTML = "Click any button to start";
    }

console.log (answerArray);

document.onkeyup = function(event) {
    var letterGuess = event.key.toLowerCase();
}
console.log(letterGuess);

// var letterGuess = event.key.toLowerCase();

// var chosenWord = presidentLastName[Math.floor(Math.random()
//      * presidentLastName.length)];
// console.log (chosenWord);

// function myFunction() {
// document.getElementById("openingStatement").innerHTML = voteable;
// }
