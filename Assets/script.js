// Password charachter possibillities 
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharachters = ["!","?", ".", "/"];
var Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Password distinctions
var Length= "";
var choseUpper;
var choseLower;
var choseNumbers;
var ChoseSpecial;

//8-127 charachters
function generatePassword() {
  var Length = prompt("How long is your password? (choose between 8-127)");

  while(Length <=8 || length >=127) {
    alert("Invalid response! Retry");
    var Length = prompt("How long is your password? (choose between 8-127)");
  }
  
  //confirmation of variables
  var choseUpper = confirm("Click Ok to include upper case letters");
  var choseLower = confirm("Click Ok to include lower case letters");
  var choseNumbers = confirm("Click Ok to include Numbers");
  var choseSpecial = confirm("Click Ok to include special charachters");

  var passwordCharacters = [];
      
  if (choseUpper) {
    passwordCharacters = passwordCharacters.concat(Upper)
  }

  if (choseLower) {
    passwordCharacters = passwordCharacters.concat(Lower)
  }

  if (choseNumbers) {
    passwordCharacters = passwordCharacters.concat(Numbers)
  }

  if (choseSpecial) {
    passwordCharacters = passwordCharacters.concat(specialCharachters)
  }


  console.log(passwordCharacters)

      var createdPassword = ""
      
      for (var i = 0; i < Length; i++) {
        createdPassword = createdPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(createdPassword)
      }
      return createdPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);