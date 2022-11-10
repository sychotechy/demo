var Shawarma = /** @class */ (function () {
    function Shawarma(meat, bread, mayonnaise, sauce, spice) {
        this.meat = meat;
        this.bread = bread;
        this.mayonnaise = mayonnaise;
        this.sauce = sauce;
        this.spice = spice;
    }
    Shawarma.prototype.addMayonnaise = function () {
        this.mayonnaise = true;
        return this;
    };
    Shawarma.prototype.addSauce = function () {
        this.sauce = true;
        return this;
    };
    Shawarma.prototype.addSpice = function () {
        this.spice = true;
        return this;
    };
    return Shawarma;
}());
var myFood = new Shawarma('Chicken', 'Kubboos').addMayonnaise().addSauce().addSpice();
console.log(myFood);
/* myFood.addMayonnaise().addSauce().addSpice();
console.log(myFood); */ 
