//Rest parameters
var greet = function (greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    console.log("".concat(greeting, ", ").concat(names.join(", ")));
};
greet("Hai", "React", "Angular");
greet("Good morning", "Daniel", "Victor");
//Optional parameter
var add = function (num1, num2, num3) {
    if (num3) {
        console.log("Sum is ".concat(num1 + num2 + num3));
    }
    else {
        console.log("Sum is ".concat(num1 + num2));
    }
};
add(10, 20);
add(10, 20, 30);
//Union parameter
var displayType = function (element) {
    if (typeof (element) == 'number')
        console.log("This is number");
    else if (typeof (element) == 'string')
        console.log("This is string");
    else
        console.log("This is boolean");
};
displayType(10);
displayType("10");
displayType(true);
displayType(undefined);
