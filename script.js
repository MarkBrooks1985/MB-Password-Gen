// Assignment Code
var generateBtn = document.querySelector("#generate");

// Below is the code for generate the random password as well as various bits and pieces to generate different aspects such as prompts and confirms

function generatePassword() {

let length = parseInt(prompt("Please choose a password length between 8 and 128 characters?"))
if (length < 8 || length > 128 || typeof length !== 'number') {
  return generatePassword();
}
let lowerPrompt = confirm("do you want lowercase characters?");
let upperPrompt = confirm("do you want uppercase characters?");
let specialPrompt = confirm("do you want Special characters?");
let numbersPrompt = confirm("do you want numeric characters?");
let password = ``;

let pass = [
  {'type': 'lower', 'active': lowerPrompt},
  {'type': 'upper', 'active': upperPrompt},
  {'type': 'special', 'active': specialPrompt},
  {'type': 'num', 'active': numbersPrompt}

];

let passLevel = pass.filter(level => level.active === true);

for (var i = 0; i < length ; i++) {
  let level = Math.floor(Math.random() * passLevel.length);
  switch(passLevel[level].type) {
    case 'lower':
      password += getLowercase();
      break;
    case 'upper':
        password += getUppercase();
        break;
    case 'special':
        password += getSpecialCharacters();
        break;
    case 'num':
        password += getNumbers();
        break;
      default:
        break;
    }
  }   if (lowerPrompt === false && upperPrompt === false && specialPrompt === false && numbersPrompt === false) {
    return generatePassword();
  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// here is the button that is used to activated the above code.

generateBtn.addEventListener("click", writePassword);

// Below are the arrays for the different parts of password gen characters.

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