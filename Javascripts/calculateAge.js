const input = require('readline-sync');
const currentDate = new Date();
function calcAge(birthYear){
    let age = currentDate.getFullYear() - birthYear;
    return age;
}
let birthYear = input.question("Enter you birth year : ");
console.log("Your age is "+calcAge(birthYear));