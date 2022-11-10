// const regularExpression = new RegExp(/^[+]91687[0-9]+$/);
// const regularExpression = new RegExp(/[+]91687\d{7}/g);
/* const regularExpression = new RegExp(/^[+]91687[0-9]{7}$/g);

const input = "+916871234567";

console.log(regularExpression.test(input));
console.log(input.match(regularExpression));
console.log(input.search(regularExpression));

const sampleString = "This is a sample string";
const regularExp = new RegExp(/t/gi);
console.log(sampleString.split(regularExp));

console.log(sampleString.replaceAll('s',(match)=>`${match}`)) */


const usernameRegex = new RegExp(/\w/g);
const passwordRegex = new RegExp(/^[\w\W]{5,9}$/g);
const emailRegex = new RegExp(/^\w+\W*@(yahoo.com|gmail.com)$/g);
const phoneRegex = new RegExp(/^[0-9]{10}$/g);
const ageRegex = new RegExp(/^(1[89]|[2][0-9]|30)$/g);

const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const age = document.getElementById('age');

function validate(){
    if(usernameRegex.test(username.value) && passwordRegex.test(password.value) && emailRegex.test(email.value)){
        alert(true);
        return true;
    }
    else{
        alert(false);
        return false;
    }
}