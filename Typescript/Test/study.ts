function addValue(value1:string,value2:string):string;

function addValue(value1:number,value2:number,value3:number):number;

function addValue(value1:any,value2:any,value3?:any):any{
    if(value3){
        return value1+value2+value3;
    }
    else{
        return value1+value2;
    }
}

console.log(addValue('Good',' Morning'));
console.log(addValue(10,20,30));