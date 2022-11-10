//Rest parameters
const greet = (greeting:string, ...names:string[])=>{
    console.log(`${greeting}, ${names.join(", ")}`)
}

greet("Hai","React","Angular");
greet("Good morning","Daniel","Victor");


//Optional parameter

const add = (num1:number,num2:number,num3?:number)=>{
    if(num3){
        console.log(`Sum is ${num1+num2+num3}`);
    }
    else{
        console.log(`Sum is ${num1+num2}`);
    }
}

add(10,20);
add(10,20,30);


//Union parameter

const displayType = (element:(string|number))=>{
    if(typeof(element)=='number') console.log("This is number");
    else console.log("This is string");
}

displayType(10);
displayType("10");