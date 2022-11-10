console.log(x);
let a = 50;
sample();
function sample(){
    let a = 100;
    const x = 50;
    console.log("Inside function : ",a);
    function hello(){
        console.log("Inside inner function : ",a);
    }
    hello();
}
console.log("Outside function : ",a);
const x = 600;