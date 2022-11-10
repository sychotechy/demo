var real = { name: "Elon musk" };
var substitute = new Proxy(real, {
    get: function (target, key) {
        console.log("Tracking by ", key);
        return target[key];
    },
    set: function (target, key, value) {
        console.log("Updating UI...");
        return Reflect.set(target, key, value);
    }
});
substitute.name;
substitute.name = 'Jeff Bezoz';
console.log(substitute);
