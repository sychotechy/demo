var i = 99;
while(i>=0){
    if(i!=0){
        console.log(i + " bottles of beer on the wall, "+i+" bottles of beer. Take 1 down, pass it around, "+(i-1)+" bottles of beer on the wall.");
    }
    else{
        console.log("No more bottles of beer on the wall, No more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
    }
    i--;
}