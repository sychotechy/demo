// Michael is going to buy lunch today!


function whosPaying(names){
/******Don't change the(names) {
     code above*******/
    
    //Write your code here.
    var randomNumber = Math.floor(Math.random()*names.length);
    return names[randomNumber]+" is going to buy lunch today!";
    
    


/******Don't change the code below*******/    
}

console.log(whosPaying());