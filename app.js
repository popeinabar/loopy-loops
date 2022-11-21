// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

const Kalvian_1 = 'ayush raj';
console.log("The driver's name is " + Kalvian_1);
const Kalvian_2 = 'chirag';
console.log("The navigator's name is " + Kalvian_2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (Kalvian_1.length > Kalvian_2.length) {
  console.log(
    'The driver has the longest name, it has ' +
      Kalvian_1.length +
      ' characters.'
  );
} else if (Kalvian_1.length < Kalvian_2.length) {
  console.log(
    'It seems that the navigator has the longest name, it has ' +
      Kalvian_2.length +
      ' characters.'
  );
} else {
  console.log(
    'Wow, you both have equally long names, ' +
      Kalvian_1.length +
      ' characters!'
  );
}


// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 

let letters2 = [];
let index2 = [];
for (let i = 0; i < Kalvian_1.length; i++) {
  if (
    Kalvian_1[i] == 'a' ||
    Kalvian_1[i] == 'i' ||
    Kalvian_1[i] == 'e' ||
    Kalvian_1[i] == 'o' ||
    Kalvian_1[i] == 'u'
  ) {
    
    letters2 += Kalvian_1[i];
    letters2 += ' ';
    index2 += i;
    index2 += ' ';
  }
}
console.log(Kalvian_1 + ' ' + letters2 + ' ' + index2);

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
let count21 = 0;
for (let j = 0; j < Kalvian_1.length; j++) {
  if (
    Kalvian_1.toUpperCase()[j] === Kalvian_1[j] &&
    Kalvian_1.toUpperCase()[j] !== ' '
  ) {
    count21++;
  }
}
console.log('the number of upper case characters= ' + count21);
let count22 = 0;
for (let k = 0; k < Kalvian_2.length; k++) {
  if (Kalvian_1.toLowerCase()[k] == Kalvian_1[k] && Kalvian_1[k] !== ' ') {
    count22++;
  }
}
console.log('the number of lower case characters= ' + count22);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"

let test1 = Kalvian_1.toUpperCase().replace(/.{0}/g, ' ');
console.log(test1.split());

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"

let three2 = test1.split();
console.log(three2.join());


// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"

console.log(Kalvian_1 + ' ' + Kalvian_2);
console.log(Kalvian_2 + ' ' + Kalvian_1);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

console.log(Kalvian_2.charCodeAt(0));
if (Kalvian_1.charCodeAt(0) > Kalvian_2.charCodeAt(0)) {
  console.log('Yo, the navigator goes first definitely.');
} else if (Kalvian_1.charCodeAt(0) < Kalvian_2.charCodeAt(0)) {
  console.log("The driver's name goes first.");
} else {
  console.log('What?! You both have the same name?');
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.


// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
