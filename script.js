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



function generatePassword() {
  // Asks how long of a password
  let passwordLength = parseInt(prompt("Choose password length: 8-128"));
    
  // Checks if password length is within parameter
  while (passwordLength < 8 || passwordLength > 128 || passwordLength === NaN || passwordLength === null) {
    alert("Password length is either too short or too long!");
    passwordLength = parseInt(prompt("Choose password length: 8-128"));
  }
  // Checks only once if clicked no input/okay/cancel....

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
  let charConfirmed = [confirmNum, confirmLowChar, confirmUpChar, confirmSpecChar]; //Array of boolean
  console.log(charConfirmed.length);
  let chars = [num, lowChar, upChar, specChar]; //Array within an array
  let charIdx = []; 
  let charsToAnArray = [];
  for (let i = 0; i < charConfirmed.length; i++) { //Used to see which character type was confirmed as "true" then adds index to a charIdx
    if (charConfirmed[i]) {
      charIdx.push(i);
      // console.log(charIdx);
      charsToAnArray = charsToAnArray.concat(chars[i]); //Puts selected character type into a single array / not array within an array
      // console.log(charsToAnArray.length);
    }
  }
  // pw = chars[index=charIdx][index=random number] this makes sure the first few characters satisfy the selected types
  let pw = " ";
  for (let i = 0; i < charIdx.length; i++) { 
    pw += chars[charIdx[i]][Math.floor(Math.random() * chars[charIdx[i]].length)];
  }
  // This then fills the password length user selected
  for (let i = pw.length; i <= passwordLength; i++) {
    let randIdx = Math.floor(Math.random() * charsToAnArray.length);
    pw += charsToAnArray[randIdx];
  }
  
  return pw;
}