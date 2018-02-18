console.log("its alive")
var computerChoices = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   var win = 0;
   var lose = 0;
   var guesses = 10;
   


   // This function is run whenever the user presses a key.
   document.onkeyup = function(event) {

     // Determines which key was pressed.
     var userGuess = event.key;
     document.getElementById("guesses").innerHTML= userGuess;

     // Randomly chooses a choice from the options array. This is the Computer's guess.
     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

     if (computerGuess ===  userGuess ) {
       win +=1; 
       document.getElementById("wins").innerHTML= win;
     }else if (computerGuess != userGuess)  {
     	lose +=1;
     	document.getElementById("losses").innerHTML= lose;
     }
 }
       




