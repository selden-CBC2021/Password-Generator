// Assignment Code
// added user variables
var generateBtn = document.querySelector("#generate");
var userChoice;
var confirmNumbers;
var confirmSymbols;
var confirmUppercase;
var confirmLowercase;
// added character type variables
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var upper = lower.map(lower => lower.toUpperCase());
console.log(upper);

var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// var passLength = userChoice.input;

// Write password to the #password input

// got the 5 prompts working
function writePassword() {
  var userChoice = parseInt(prompt("How long do you want your password to be please enter a number between 8 and 128."));
  if (userChoice < 8 || userChoice > 128) {
    userChoice = parseInt(prompt("Value is not between 8 and 128"));

  } else {
    confirmUppercase = confirm("Would you like to include uppercase?");
    confirmLowercase = confirm("Would you like to include lowercase?");
    confirmNumbers = confirm("Would you like to include numbers?");
    confirmSymbols = confirm("Would you like to include symbols?");
    
  }
  


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
for (var i = 0; i < userChoice.parseInt.length; i++) {

}