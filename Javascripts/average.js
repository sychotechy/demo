var input = require('readline-sync');
var num1 = input.question("Enter first number : ");
var num2 = input.question("Enter second number : ");
var num3 = input.question("Enter third number : ");
if(isNaN(num1)||isNaN(num2)||isNaN(num3)){
    console.log("Enter a valid number.");
}
else{
    var result = (parseFloat(num1)+parseFloat(num2)+parseFloat(num3))/3;
    console.log("Average is ",result.toFixed(2));
}