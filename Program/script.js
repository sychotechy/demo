var input1 = prompt("Enter first number : ");
var input2 = prompt("Enter second number : ");
var input3 = prompt("Enter third number : ");
if(isNaN(input1)||isNaN(input2)||isNaN(input3)){
    alert("Enter a valid number");
}
else{
    var result = ((parseFloat(input1) + parseFloat(input2) + parseFloat(input3))/3);
    alert("Average = "+result.toFixed(2));
}