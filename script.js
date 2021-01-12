// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Characters available
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specialCharacter = "~!@#$%^&*()_-+={}[]<>?";


//---for my Understanding--- Math.floor(Math.random() * )
function getRandom(ourcase) {
  var index = Math.floor(Math.random() * ourcase.length);
  var randomCharacter = ourcase[index];
  return randomCharacter;
}

// Console log to check
console.log(getRandom(lowercase));
console.log(getRandom(uppercase));
console.log(getRandom(number));
console.log(getRandom(specialCharacter));

// Function to get a valid number from user
function getCharacterAmount() {
  var charactersNo = parseInt(prompt("  To generate a password: \n1. Provide a number of how many characters you would like your password to be of.\n 2. ------The lenght: at least 8 characters and no more than 128 characters------"));

  while (charactersNo < 8 || charactersNo > 128 || isNaN(charactersNo)) {
    alert("   ATTENTION!!! \n------Must be a number between 8-128------");
    charactersNo = parseInt(prompt("Provide a number for how many characters of generated PASSWORD \n!!! Make sure to choose one between 8-128")); 
  }
  return charactersNo;
}

//Main function that will generate the PASSWORD
function generatePassword() {
  var charactersNo = getCharacterAmount();

  var password = "";

  //Ask user what type of characters to be used for the generated password
  var withLower = confirm("     ----lowercase---- \nDo you like your password to include  ---lowercase---   characters? \nClick 'OK - for YES' and 'Cancel - for No'");
  var withUpper = confirm("     ----UPPERCASE---- \nDo you like your password to include  ---uppercase---   characters? \nClick 'OK - for YES' and 'Cancel - for No'");
  var withNumbers = confirm("     ----Numbers---- \nDo you like your password to include  ---numeric---   characters? \nClick 'OK - for YES' and 'Cancel - for No'");
  var withSymbols = confirm("      ----Symbols---- \nDo you like your password to include  ---Symbols/Special characters---  ? \nClick 'OK - for YES' and 'Cancel - for No'");

  //If user do not select any type of characters to be used
  while (!withLower && !withUpper && !withNumbers && !withSymbols) {
    alert("         ATTENTION \n---None of the character type selected--- \n !!!Try again and select at least one character Type.");
    withLower = confirm("         ----lowercase---- \nClick 'OK - for YES' and 'Cancel - for No'");
    withUpper = confirm("         ----UPPERCASE---- \nClick 'OK - for YES' and 'Cancel - for No'");
    withNumbers = confirm("         ----Numbers---- \nClick 'OK - for YES' and 'Cancel - for No'");
    withSymbols = confirm("          ----Symbols---- \nClick 'OK - for YES' and 'Cancel - for No'");
  }
  // Available characters depending on situation
  var availCharacters = "";
  if (withLower) {
    availCharacters += lowercase;
    console.log(availCharacters);
  }

  if (withUpper) {
    availCharacters += uppercase;
    console.log(availCharacters);
  }

  if (withNumbers) {
    availCharacters += number;
    console.log(availCharacters);
  }

  if (withSymbols) {
    availCharacters += specialCharacter;
    console.log(availCharacters);
  }

  var password = "";

  for (var i = 0; i < charactersNo; i++) {
    var randomIndex = Math.floor(Math.random() * availCharacters.length);
    password += availCharacters[randomIndex];
  }
  
  return password;
} 
