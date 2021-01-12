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


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

//Pick Random characters from the available elements
function getRandomLower() {
  var possibleLowercase = "abcdefghijklmnopqrstuvwxyz";
  return possibleLowercase[Math.floor(Math.random() * possibleLowercase.length)];
}

function getRandomUpper() {
  var possibleUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return possibleUppercase[Math.floor(Math.random() * possibleUppercase.length)];
}

function getRandomNumber() {
  var possibleNumber = "0123456789";
  return possibleNumber[Math.floor(Math.random() * possibleNumber.length)];
}

function getRandomSpecial() {
  var possibleSpecialCharacter = "~!@#$%^&*()_-+={}[]<>?";
  return possibleSpecialCharacter[Math.floor(Math.random() * possibleSpecialCharacter.length)];
}

// Console log to check
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSpecial());

// Function to get a valid number from user
function getCharacterAmount() {
  var charactersNo = parseInt(prompt("  To generate a password: \n1. Provide a number of how many characters you would like your password to be of.\n 2. ------The lenght: at least 8 characters and no more than 128 characters------"));

  while (charactersNo < 8 || charactersNo > 128 || isNaN(charactersNo)) {
    alert("   ATTENTION!!! \n------Must be a number between 8-128------");
    charactersNo = parseInt(prompt("Provide a number for how many characters of generated PASSWORD \n!!! Make sure to choose one between 8-128")); 
  }
  return charactersNo;
  //_____________How to return when user cancel it...___________
  // if (charactersNo != null) {
  //   alert("Alright, feel free to click -----Generate Password----- when ready.");
  // } return;
  
}

//Main function that will generate the PASSWORD
function generatePassword() {
  var passwordLength = getCharacterAmount();

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


} 















// // 
//   if (charactersNo === "") {
//     alert(" ATTN \nMust be a number between 8-128.")
//     getCharacterTypes();
//   } else if (charactersNo) {
//     var withLower = confirm("     ----lowercase---- \nDo you like your password to include  ---lowercase---   characters? \nClick 'OK - for YES' and 'Cancel - for No'");
//     var withUpper = confirm("     ----UPPERCASE---- \nDo you like your password to include  ---uppercase---   characters? \nClick 'OK - for YES' and 'Cancel - for No'");
//     var withNumbers = confirm("     ----Numbers---- \nDo you like your password to include  ---numeric---   characters? \nClick 'OK - for YES' and 'Cancel - for No'");
//     var withSymbols = confirm("      ----Symbols---- \nDo you like your password to include  ---Symbols/Special characters---  ? \nClick 'OK - for YES' and 'Cancel - for No'");
  
//   } else {
//     alert("  Canceled/Wrong character: \n1. Try again by clicking 'GENERATE PASSWORD' \n2. Make sure to enter a number between: 8 - 128 next time.")
//   }

//   var passwordOptions = {
//     lower: withLower,
//     upper: withUpper,
//     numbers: withNumbers,
//     symbol: withSymbols,
//     length: charactersNo,
//   };
//   return passwordOptions;


// getCharacterTypes();


// function generatePassword() {
//    //initial variable values
//    var password = "";
//    var characterLength;
//    var lowercase;
//    var uppercase;
//    var numeric;
//    var specialCharacter;
 


// }