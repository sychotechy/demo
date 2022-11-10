var output = [];

function fizzbuzz(){
    for(var num=1;num <= 100;num++){
        if(num%3===0 && num%5===0){
            output.push("fizzbuzz");
        }
        else if(num%3===0){
            output.push('Fizz');
        }
        else if(num%5===0){
            output.push('Buzz');
        }
        else{
            output.push(num);
        }
        
    }
    console.log(output);
}
fizzbuzz();