const input = require('readline-sync');

/* const userInput = input.question("Enter a string : ");
let splittedInput = userInput.split(' ');
console.log(splittedInput.reverse().join(' ')); */

// console.log(userInput.split(' ').reverse().join(' '));

const userInput = input.question("Enter a string : ");

/* function reverseBySeperator(string, seperator){
    return string.split(seperator).reverse().join(seperator);
}

let reverseBySentence = reverseBySeperator(userInput, '');
console.log(reverseBySentence)

let reverseByWord = reverseBySeperator(reverseBySentence, ' ');
console.log(reverseByWord); */

console.log(userInput.split(" ").reverse().join(" "))