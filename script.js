// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {

let length = prompt("Please choose a password length between 8 and 128 characters?")
let lowercase = confirm("do you want lowercase characters?");
let uppercase = confirm("do you want uppercase characters?");
let specialCharacters = confirm("do you want Special characters?");
let numbers = confirm("do you want numeric characters?");

var password = "lowercase" + "uppercase" + "specialCharacters" + "numbers";

for (var i = 0; i < 10 ; i++) {
  isNumberIncluded();{
     password = password + numeric;
   }
  if(isUpperCaseIncluded){
    password = password + uppercase;
  }
  if(isLowercaseIncluded){
    password = lowercase;
  }
  if(isSpecialIncluded){
    password = password + specialCharacters;
  }
}

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log(randomgen);
  console.log(generatePassword);
 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Array of special characters to be included in password
function getSpecialCharacters() {
  var specialcharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
  ];

  var randomindex = Math.floor(Math.random() * specialcharacters.length);
  var randomgen = specialcharacters[randomindex];
  return randomgen;
}

function getNumbers() {

  // Array of numeric characters to be included in password
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var randomindex = Math.floor(Math.random() * numbers.length);
var randomgen = numbers[randomindex];
return randomgen;

}

function getLowercase() {

  var lowercase = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  var randomindex = Math.floor(Math.random() * lowercase.length);
  var randomgen = lowercase[randomindex];
  return randomgen;

}

function getUppercase() {

  var uppercase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  var randomindex = Math.floor(Math.random() * uppercase.length);
  var randomgen = uppercase[randomindex];
  return randomgen;

}

console.log(password);