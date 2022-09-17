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
const options = [];

// Assignment code here
var generatePassword = function() {
  var passwordLength = prompt('How long will your password be? (Enter a number between 8 - 128)');
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Please enter a number between 8 - 128');
    return passwordLength;
  }

  var passwordCharacterSet = function () {
    var lowerCaseConfirm = confirm('Will your password have LOWERCASE characters?');
    var upperCaseConfirm = confirm('Will your password have UPPERCASE characters?');
    var numConfirm = confirm('Will your password have NUMERIC characters?');
    var symbolConfirm = confirm('Will your password have SPECIAL characters?');
  };

passwordCharacterSet();

  function checkCharacterSet() {
    if (
      this.lowerCaseConfirm == false &&
      this.upperCaseConfirm == false &&
      this.numConfirm == false &&
      this.symbolConfirm == false) {
      alert('At least ONE character type must be included for the password to generate. Please try again.')
      this.passwordCharacterSet();
    }
  };

  if (passwordCharacterSet.lowerCaseConfirm) {
    options = options.concat(lowerCase);
  }
  if (passwordCharacterSet.upperCaseConfirm) {
    options = options.concat(upperCase);
  }
  if (passwordCharacterSet.numConfirm) {
    options = options.concat(num);
  }
  if (passwordCharacterSet.symbolConfirm) {
    options = options.concat(specChar);
  }

  const password = [];

  for (var i = 0; i < passwordLength; i++) {
    const concatOptions = options[Math.floor(Math.random() * options.length)];
    password.push(concatOptions);
  }
  return password.join("")
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
