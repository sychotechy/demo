function getMilk(money,costPerBottle){
    console.log("Milk bottles can be buy : "+noOfBottle(money,costPerBottle));
    return change(money,costPerBottle)
}
function noOfBottle(money,costPerBottle){
    var bottles = Math.floor(money/costPerBottle);
    return bottles;
}
function change(money,costPerBottle){
    return money%costPerBottle;
}
console.log("Remaining money : "+getMilk(5,2.5));