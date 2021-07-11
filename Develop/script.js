// Password parameters

function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
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

document.querySelector('#generate').addEventListener('click', promptpassword);

function promptpassword() {
    var Passlength = prompt("Length of password? (between 8-128 characters)");
    console.log("" + passlength)
    alert (Passlength);
}




/*

function getRandomLower() {
  return String.fromCharCode(math.floor(Math.random() * 26) +97);
}

function getRandomUpper() {
  return String.fromCharCode(math.floor(Math.random() * 26) +65);
}*/