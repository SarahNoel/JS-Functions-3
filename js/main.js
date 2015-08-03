// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

// Define a function called getStudentName that takes a single object as an argument and returns the value of the name property/key.

var name = {name: 'Michael', age: 27 };

function getStudentName(student){
  return student.name;
}

console.log(getStudentName(name));

// Define a function called getTotalLetters that takes an array of strings as an argument and returns the total number of letters in all strings.

function getTotalLetters (array) {
  var flat = array.join("");
  return flat.length;
}

var stringArray = ['javascript', 'is', 'not', 'python'];
console.log(getTotalLetters(stringArray)); // => 21


// Define a function called 'createObject' that takes two arguments and returns a new object with a key of the first argument and the value of the second argument.

function createObject(key, value){


}

createObject('city', 'Boulder'); // => {city: 'Boulder'}
// Define a function called getNegativeIndex that takes an array and a negative number as arguments and returns the value from the array at the given negative index.

// var letterArray = ['a', 'b', 'c', 'd', 'e'];
// getNegativeIndex(letterArray, -3); // => c
// Define a function called removeCharacter that takes a string and a single character (string or integer) as arguments and returns the string with the characters removed. Do not modify the original string. STRETCH: Write a test case for this last requirement.

// removeCharacter('javascript', 'a'); // => jvscript
// removeCharacter('javascript', '1'); // => javascript
// removeCharacter('12345', '2'); // => 1345
// Define a function called outputObject that takes an object as an argument and returns each key-value pair in the following format 'key .

// var ages = {john: 10, jerry: 11, jenny: 12 };
// outputObject(ages); // => john is 10, jerry is 11, jenny is 12
// Define a function called getVowels that takes a string as an argument and returns an array of all the vowels in the string. Do not include duplicates.

// getVowels('javascripting'); // => ['a', 'i']
// Define a function called captureTwins that takes an array as an argument and returns true if every adjacent pair of items in the array is the same, otherwise return false.

// captureTwins(['m', 'm', 'n', 'n', 's', 's']); // => true
// captureTwins(['m', 'm', 'm', 'n', 's', 's']); // => false
// Define a function called testBooleanLogic that takes an array of boolean values and returns true if any value is true.

// testBooleanLogic([false, true, false, false]); // => true
// testBooleanLogic([false, false, false]); // =>  false
// Define a function called getUniqueValues that takes an array of strings, and returns a new array consisting of the unique values.

// getUniqueValues(['m', 'n', 'm', 'r', 'r', 's']); // => ['m', 'n', 'r', 's']
// getUniqueValues(['michael', 'ben', 'kerry', 'ben']); // => ['michael', 'ben', 'kerry']







































});
