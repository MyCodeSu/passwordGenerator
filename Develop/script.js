// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "1234567890";
const specChar = "`~!@#$%^&*()_+-=[];',./{}|:?<>|";
var charSet = "";
var password = "";
var passwordLength = function () {
  prompt('Your password must be at least 8 - 128 characters in length. Please enter your password length.');
  return passwordLength;
}
// Assignment code here



var generatePassword = function () {›


  var length = "";

  while (length < 8 || length > 128 || length === "" || length === null ) {

    alert("Your password must be at least 8 - 128 characters in length. Please enter your password length.");
    length = parseInt(passwordLength());
  }


  while (charSet === "" || charSet === null) {

    var userCharSelect = confirm("Will your password use lowercase letters?")
    if (userCharSelect) {
      charSet = lowerCase;
    }
    userCharSelect = confirm("Will your password use uppercase letters?")
    if (userCharSelect) {
      charSet += upperCase;
    }
    userCharSelect = confirm("Will your password use numbers?")
    if (userCharSelect) {
      charSet += num;
    }
    userCharSelect = confirm("Will your password use special characters?")
    if (userCharSelect) {
      charSet += specChar;
    }
    if (charSet === "" || charSet === null) {
      alert("At least one option must be selected to generate your password.")
    }

  }

  for (var i = 0; i < length; i++) {
    password = charSet.charAt(Math.floor(Math.random() * length));
  }
  return password;

};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.innerText = password;



};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
