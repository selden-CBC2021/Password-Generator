// Assignment Code

// added user variables

var length;
var options;
var confirmNumbers;
var confirmSymbols;
var confirmUpper;
var confirmLower;
// added character type variables
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var symbols = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var generateBtn = document.querySelector("#generate");
// var passLength = userChoice.input;

// Write password to the #password input

// got the 5 prompts working
function writePassword() {
 
  var length = parseInt(prompt("How long do you want your password to be? Please enter a number between 8 and 128."));
  if (!length) {
     alert("Please enter a number");
     return;
   }
  if (length < 8 || length > 128) {
    length = parseInt(prompt("Value is not between 8 and 128"));
  } 
    confirmUpper = confirm("Would you like to include uppercase?");
    confirmLower = confirm("Would you like to include lowercase?");
    confirmNumbers = confirm("Would you like to include numbers?");
    confirmSymbols = confirm("Would you like to include symbols?");
  
  if (!confirmUpper && !confirmLower && !confirmNumbers && !confirmSymbols) {
      alert("Please choose at least 1 of the character types for your password. ");
   }
   // added object options with key values to use while generating password
   var options = {
    length: length,
    specials: confirmSymbols,
    numeric: confirmNumbers,
    lowerCase: confirmLower,
    upperCase: confirmUpper
}
return options;

}
// console.log(writePassword);

function generatePassword () {

  var options = writePassword();
    // console.log(options);

  var password = [];
    // console.log(password);

    if (options.specials) {
        for (i = 0; i < symbols.length; i++) {
            password.push(symbols[i]);
        }
    } 
    if (options.numeric) {
        for (i = 0; i < numbers.length; i++) {
        password.push(numbers[i]);
        }
    }
    if (options.lowerCase) {
        for (i = 0; i < lower.length; i++) {
        password.push(lower[i]);
        }
    }
    if (options.upperCase) {
        for (i = 0; i < upper.length; i++) {
        password.push(upper[i]);
        }
    }
 var generatedPassword = [];
 for (let i = 0; i < options.length; i++) {
  var randomSelection = Math.floor(Math.random() * Math.floor(password.length));
   generatedPassword.push(password[randomSelection])
}

console.log(generatedPassword);
// since generatedPassword logs an array we use .join to convert all elements in that array to a string
var finalPassword = generatedPassword.join('');
console.log(finalPassword)

document.querySelector("#password").value = finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
