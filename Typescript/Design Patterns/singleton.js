var Settings = /** @class */ (function () {
    function Settings() {
    }
    Settings.getInstance = function () {
        if (!Settings.instance) {
            Settings.instance = new Settings();
        }
        return Settings.instance;
    };
    return Settings;
}());
var sett = Settings.getInstance();
console.log(sett);
