var IOSButton = /** @class */ (function () {
    function IOSButton() {
    }
    return IOSButton;
}());
var AndroidButton = /** @class */ (function () {
    function AndroidButton() {
    }
    return AndroidButton;
}());
var ButtonFactory = /** @class */ (function () {
    function ButtonFactory() {
    }
    ButtonFactory.prototype.createButton = function (os) {
        if (os === 'ios') {
            return new IOSButton;
        }
        else {
            return new AndroidButton;
        }
    };
    return ButtonFactory;
}());
var factory = new ButtonFactory();
var IOSBtn = factory.createButton('ios');
var AndroidBtn = factory.createButton('android');
console.log(IOSBtn);
console.log(AndroidBtn);
