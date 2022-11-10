let numStr = "123";
// let num = <number><any>numStr;

let num = numStr as any as number;

console.log(typeof num)