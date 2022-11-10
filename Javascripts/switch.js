const input = require('readline-sync');
let day = input.question("Enter a day : ");
switch(day){
    case 'monday':
        console.log("Starts the week");
        console.log("Do the things as much as you can");
        break;
    case 'tuesday':
        console.log("This is tuesday");
        break;
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log("Starts doing coding challenge");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy your weekend");
        break;
    default:
        console.log("Enter a valid day");
}