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


// Create an array of characters to be used
let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "/", ",", ".", "<", ">", ";", ":", "{", "}", "[", "]", "`", "~",];

// Asks how long of a password
let passwordLength = parseInt(prompt("Choose password length: 8-128"));
// Doesn't check if accidentally clicked cancel ....
// Checks if too short or too long
while (passwordLength < 8 || passwordLength > 128) {
  alert("Password length is either too short or too long!");
  passwordLength = parseInt(prompt("Choose password length: 8-128"));
}

// Asks which characters to include in password
let confirmNum = confirm("Include numbers?");
let confirmLowChar = confirm("Include lower case alphabet?");
let confirmUpChar = confirm("Include upper case alphabet?");
let confirmSpecChar = confirm("Include some special characters?");
 
// Checks if a type of character was chosen
while (confirmNum === false && confirmLowChar === false && confirmUpChar === false && confirmSpecChar === false) {
  alert("Must have at least one type of characters!");
  confirmNum = confirm("Include numbers?");
  confirmLowChar = confirm("Include lower case alphabet?");
  confirmUpChar = confirm("Include upper case alphabet?");
  confirmSpecChar = confirm("Include some special characters?");
}

// Creates arrays for characters to be used
let charConfirmed = [confirmNum,confirmLowChar,confirmUpChar,confirmSpecChar];
let chars = [num,lowChar,upChar,specChar];
let charIdx = [];
let charsToAnArray = [];
for (let i = 0; i < charConfirmed.length; i++){
  if (charConfirmed[i]){
    charIdx.push(i);
    console.log (charIdx);
    charsToAnArray = charsToAnArray.concat(chars[i]);
    console.log (charsToAnArray);
  }
}

// // Generates the password with first few characters to satisfy selection + uses random number to choose random character
// function generatePassword () {
//   let pw = " ";
//   for (let i = 0; i < charIdx.length; i++) {
//     let choices = chars[charIdx[i]];
//     pw+= choices[Math.floor(Math.random()*choices.length)];
//   }

//   for (let i = 0; i < passwordLength; i++){
//     let randIdx = Math.floor(Math.random()*charsToAnArray.length);
//     pw += charsToAnArray[randIdx];
      
//   }
//   return pw;
// }

function generatePassword () {
    let pw = " ";
    for (let i = 0; i < charIdx.length; i++) {
      pw+= chars[charIdx[i]][Math.floor(Math.random()*chars[charIdx[i]].length)];
    }
  
    for (let i = 0; i < passwordLength; i++){
      let randIdx = Math.floor(Math.random()*charsToAnArray.length);
      pw += charsToAnArray[randIdx];
        
    }
    return pw;
  }