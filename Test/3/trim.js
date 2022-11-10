function trimString(str){
    let resultString = [];
    for(var i=0;i<str.length;i++){
        if(str.charAt(i)!=''){
            resultString = resultString + charAt(i);
        }
        else{
            continue;
        }
    }
    return resultString;
}
console.log(trimString("         Hello      world        "))