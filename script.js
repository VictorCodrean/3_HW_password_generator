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

function generatePassword() {
  
  //initial variables when ---Generate Password--- clicked.
  var password = "";
  var characterNo;
  var lowercase;
  var uppercase;
  var numeric;
  var specialCharacter;
   // Let user enter an integer number of how many characters to be used...
   characterNo = parseInt(prompt("    To generate a password: \n1. Provide a number of how many characters you would like your password to be of.\n 2. The lenght of password should consist of at least 8 characters and no more than 128 characters."));
  
   // user pressed OK, but the input field is empty
   if (characterNo === "") {
    alert("You entered blank space \n! Enter a number between: 8 - 128.");
    generatePassword();
   } else if (characterNo) {
     
      // If entered number don't meet required value.
      while (characterNo < 8 || characterNo > 128) {
        alert("   Attention: \n1. The lenght of password should consist of at least 8 characters and no more than 128 characters. \n2. Next time enter a number between: 8 - 128!!!");
      return;
      }
    // Details of generated password
     var information = alert("1. Following prompts will ask you what type of characters to use. \n2. !!! To successfully generate the password, at least one of the following prompts - 'character type' should be clicked as  ---OK---   !!! ")
    // lowercase character question
     var lowercase = prompt("     ----lowercase---- \nDo you like your password to include  ---lowercase---   characters? \nClick 'OK - for YES' and 'Cancel - for No'");
    // UPPERCASE characters QUESTION
     var uppercase = prompt("     ----UPPERCASE---- \nDo you like your password to include  ---uppercase---   characters? \nClick 'OK - for YES' and 'Cancel - for No'");
    // numeric character question
     var numeric = prompt("     ----Numbers---- \nDo you like your password to include  ---numeric---   characters? \nClick 'OK - for YES' and 'Cancel - for No'");
    // special character  question
     var specialCharacter = prompt("      ----Special characters---- \nDo you like your password to include  ---Special characters---  ? \nClick 'OK - for YES' and 'Cancel - for No'");
   } else {
    alert("  Canceled/Wrong character: \n1. Try again by clicking 'GENERATE PASSWORD' \n2. Make sure to enter a number between: 8 - 128 next time.");
    return;
   }

  
   

}
