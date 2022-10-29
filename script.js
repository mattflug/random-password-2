// Assignment Code
// Upper case letters
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Lower case letters
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChar = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Ask for user choice
  var userChoice = window.prompt(
    "Please enter a password length at least 8 and no more than 128 characters."
  );
  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }

  // Get random index from array of upperCase
  var index1 = Math.floor(Math.random() * upperCase.length);
  var upperChoice = options[index1];

  // Get random index from array of lowerCase
  var index2 = Math.floor(Math.random() * options.length);
  var computerChoice = options[index2];

  // Get random index from array of numbers
  var index3 = Math.floor(Math.random() * options.length);
  var computerChoice = options[index3];

  // Get random index from array of special characters
  var index4 = Math.floor(Math.random() * options.length);
  var computerChoice = options[index4];
}
