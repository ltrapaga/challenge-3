// Targets the generate button
var generateBtn = document.querySelector("#generate");

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function that provides text for password display window
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password === undefined) {
    return
  }
      passwordText.value = password; 
}

// Write password to the #password input
function generatePassword() {

  var userInput = window.prompt("How many characters would you like your password to be?");

  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert("That is not a number!")
  return
    }
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters") 
      return
    }
// Prompts for types of characters to include in generated password
var userNumbers = window.confirm("Do you want to add numbers to your password?");
var userSymbols = window.confirm("Do you want to add symbols to your password?");
var userLowercase = window.confirm("Do you want to add lowercase characters to your password?");
var userUppercase = window.confirm("Do you want to add uppercase characters to your password?");

// Arrays that provide character types
var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "~"];
var lowercaseList = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]
var uppercaseList = []

var allOptions = [];

// For loop and conditional statements that determine what will be included in the generated password
for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase();
}

if (userNumbers === true) {
  allOptions.push(numberList);
}

if (userSymbols === true) {
  allOptions.push(symbolList);
}

if (userLowercase === true) {
  allOptions.push(lowercaseList);
}

if (userUppercase === true) {
  allOptions.push(uppercaseList);
}

if (allOptions.length === 0) {
  allOptions.push(lowercaseList)
}

var generatedPassword = "";

for (var i = 0; i < passwordLength; i++) {
  var randomList = getRandomNumber(allOptions);
  var randomChar = getRandomNumber(randomList);
  generatedPassword += randomChar
}
return generatedPassword
}

//Function that generates random number

function randomNumber(max) {
  var random = Math.random();
  return Math.floor(random*max)
}

// Function that picks random index values from array lists

function getRandomNumber(list) {
  return list[randomNumber(0, list.length - 1)];
}
