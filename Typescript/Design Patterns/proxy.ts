const real = {name: "Elon musk"};

const substitute = new Proxy(real, {
    get(target, key){
        console.log("Tracking by ",key);
        return target[key];
    },
    set(target, key, value){
        console.log("Updating UI...");
        return Reflect.set(target, key, value);
    }
})

substitute.name;

substitute.name = 'Jeff Bezoz';

console.log(substitute)