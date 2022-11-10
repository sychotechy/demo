var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.area = function (rad) {
        return 3.14 * rad * rad;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.area = function (length, breadth) {
        return length * breadth;
    };
    return Rectangle;
}());
var obj1 = new Rectangle();
console.log(obj1.area(5, 4));
var obj2 = new Circle();
console.log(obj2.area(5));
