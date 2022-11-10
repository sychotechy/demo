var PlumbingSystem = /** @class */ (function () {
    function PlumbingSystem() {
    }
    PlumbingSystem.prototype.setPressure = function (pressure) { };
    PlumbingSystem.prototype.turnOn = function () { };
    PlumbingSystem.prototype.turnOff = function () { };
    return PlumbingSystem;
}());
var ElectricalSystem = /** @class */ (function () {
    function ElectricalSystem() {
    }
    ElectricalSystem.prototype.setVoltage = function (voltage) { };
    ElectricalSystem.prototype.turnOn = function () { };
    ElectricalSystem.prototype.turnOff = function () { };
    return ElectricalSystem;
}());
var House = /** @class */ (function () {
    function House() {
        this.plumbling = new PlumbingSystem();
        this.electrical = new ElectricalSystem();
    }
    House.prototype.turnOnSystems = function () {
        this.plumbling.setPressure(150);
        this.plumbling.turnOn();
        this.electrical.setVoltage(130);
        this.electrical.turnOn();
    };
    House.prototype.turnOffSystems = function () {
        this.plumbling.turnOff();
        this.electrical.turnOff();
    };
    return House;
}());
var client = new House();
console.log(client);
