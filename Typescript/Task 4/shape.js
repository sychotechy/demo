var canvas = document.getElementById('display');
var context = canvas.getContext('2d');
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.arc(150, 100, 60, 0, 2 * Math.PI);
        context.stroke();
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.draw = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.rect(80, 50, 150, 100);
        context.stroke();
    };
    return Rectangle;
}());
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.draw = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.rect(105, 50, 100, 100);
        context.stroke();
    };
    return Square;
}());
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.draw = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.moveTo(100, 50);
        context.lineTo(200, 150);
        context.lineTo(100, 150);
        context.closePath();
        context.lineWidth = 1;
        context.stroke();
    };
    return Triangle;
}());
function changeShape(event) {
    switch ((event.target.value).toLowerCase()) {
        case 'circle':
            var circleObj = new Circle();
            circleObj.draw();
            break;
        case 'rectangle':
            var rectangleObj = new Rectangle();
            rectangleObj.draw();
            break;
        case 'square':
            var squareObj = new Square();
            squareObj.draw();
            break;
        case 'triangle':
            var triangleObj = new Triangle();
            triangleObj.draw();
            break;
        case 'initial':
            context.clearRect(0, 0, canvas.width, canvas.height);
            break;
        default:
            alert("Wrong choice !!!");
    }
}
