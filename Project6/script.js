var num1 = prompt("Enter first number : ")
var num2 = prompt("Enter second number : ")
function add(num1,num2){
    var result = parseFloat(num1) + parseFloat(num2);
    return result;
}
alert("Sum : "+add(num1,num2));