'use strict'

//FIXME: Function default parameter
/* const bookings = [];
const bookFlight = function(flightName,NumberOfPassengers = 1,ticketPrice = NumberOfPassengers*50){
    //ES5 method for default parameter
    // NumberOfPassengers = NumberOfPassengers || 1;
    // ticketPrice = ticketPrice || 199;

    const booking = {
        flightName,
        NumberOfPassengers,
        ticketPrice
    }
    bookings.push(booking);
    console.log(bookings)
}
bookFlight("Indigo",30,400);
bookFlight("Indigo",10)
bookFlight("Air India",undefined,600); */



//TODO: Passing arguments: Value vs reference
/* const flighNum = "LH232";
const person = {
    name: 'angular',
    passport: 1234567890
}
const checkIn = function(flighNum,person){
    flighNum = flighNum;
    person.name = "Mr. " + person.name;
    if(person.passport === 1234567890){
        alert("Welcome...")
    }
    else{
        alert("Wrong passport");
    }
}

checkIn("LH900",person);
console.log(flighNum);    //here the flight number is LH232 because it passes only a reference to the variable
console.log(person);      //here person name changes because,
                          // in case of object it passes a copy of the object to the function,
                          // and the changes to the copy also affect to the original object. */



//TODO: Function accepting callback functions
/* const oneWord = function(str){
    return str.replace(/ /g,'').toLowerCase();
}
const firstWordUpper = function(str){
    const [firstWord,...others] = str.split(' ');
    return [firstWord.toUpperCase(),...others].join(' ');
}
const transformer = function(inputString,func){
    console.log(`One word : ${func(inputString)}`);
    console.log(func.name)
}

transformer("This is a sample string",oneWord); */


//TODO: Function returning functions
/* const greet = function(greeting){
    return function(name){
        return `${greeting}, ${name}`;
    }
} */

// const greeter = greet("Good morning")
// console.log(greeter("Sreejith"));
// console.log(greet("Good morning")("Sreejith"));


//TODO: Function returning functions using arrow function
/* const greet = greeting => name => `${greeting}, ${name}`;
const greeter = greet('Welcome');
greeter("React");
greeter("Angular") */


//FIXME: CALL method
/* const airIndia = {
    flightName: "Air India",
    iataCode: "AI",
    bookings: [],
    book(flighNum,name){
        console.log(`${name} booked a seat on ${this.flightName} flight ${this.iataCode+flighNum}`);
        this.bookings.push({flight: `${this.iataCode}${flighNum}`, name});
    },
}

airIndia.book(232,"Joan");
airIndia.book(434,"Angela");
console.log(airIndia);

const book = airIndia.book;
//Does not work
// book(232, "React")
book.call(airIndia, 545, "Karen");

const indigo = {
    flightName: "Indigo",
    iataCode: "IG",
    bookings: []
}
book.call(indigo,898,"Cherie")
book.call(indigo,500,"Ariella")
console.log(indigo)

//FIXME: APPLY method

book.apply(airIndia, [121,"Katherin"])

const flightData = [123,"Alex"];
book.apply(indigo, flightData);     //Apply is similar to call method
                                    //But accept an array as second argument

 */



//FIXME: Bind Method
/* const airIndia = {
    flightName: "Air India",
    iataCode: "AI",
    bookings: [],
    book(flighNum,name){
        console.log(`${name} booked a seat on ${this.flightName} flight ${this.iataCode+flighNum}`);
        this.bookings.push({flight: `${this.iataCode}${flighNum}`, name});
    },
}

const indigo = {
    flightName: "Indigo",
    iataCode: "IG",
    bookings: []
}

const book = airIndia.book;
const bookFunc = book.bind(airIndia);
bookFunc(1234,"Allura");

const bookFunc2 = book.bind(indigo);
bookFunc2(123,"Ariella");        //Bind function returns a function

const bookFunc3 = book.bind(airIndia, 123);
bookFunc3("Joan");

const bookFunc4 = book.bind(indigo, 890, "Sasha");
bookFunc4(); */


//TODO: Immediately Invoked Function Expression (IIFE)
/* (function(){
    console.log("This will never run again.");
})(); */

//TODO: IIFE with arrow function
/* (()=>console.log("This will never run again"))(); */