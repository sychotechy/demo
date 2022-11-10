// var guestList = ["Angular","React","Nuxt","Vue","Node","Express"];

// for(i=0;i<guestList;i++){
//     console.log("Guest " + (i+1) + " : " + guestList[i]);
// }

var guestList = ["Angular","React","Nuxt","Vue","Node","Express"];
var name = prompt("Enter your name : ");
var firstLetter = name.slice(0,1);
firstLetter = firstLetter.toUpperCase();
var remainingChar = name.slice(1,name.length);
remainingChar = remainingChar.toLowerCase();
var fullName = firstLetter + remainingChar;
if(guestList.includes(fullName)){
    alert("Welcome "+fullName);
}
else{
    alert("Sorry next time");
}