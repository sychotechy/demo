'use strict';
//const input = require('readline-sync');

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderpasta: function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with incredients ${ing1}, ${ing2} and ${ing3}`);
  }
};


//TODO:spread operator tests
/* const newMenu = [...restaurant.mainMenu, "Meals", "Biriyani"];
console.log(newMenu); */

//TODO:copy array with spread operator
/* const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); */

//TODO:merge 2 array with spread operator
/* const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu); */

//TODO:implementation of spread operator
/* const ingredients = [
  prompt("Enter first ingredient : "),
  prompt("Enter second ingredient : "),
  prompt("Enter third ingredient : ")
]
console.log(ingredients);
restaurant.orderpasta(...ingredients); */


//TODO:rest operator
/* const [pizza, , risotto,...otherFoods] = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(pizza);
console.log(risotto);
console.log(otherFoods); */

//TODO:logical assignment operator

/* const rest1 = {
  name: 'Bektash',
  place: 'Nettoor'
}

const rest2 = {
  name: 'Capi luak',
  owner: 'Juan'
}
 */
//logical assignment
/* rest1.owner = rest1.owner || 'someone';
rest2.owner = rest2.owner || 'someone'; */

//logical assignment operator
/* rest1.owner ||= 'someone';
rest2.owner ||= 'someone';

console.log(rest1)
console.log(rest2) */

/* //creating array for for-of loop testing
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];


//TODO:for of loop
for(const item of menu) console.log(item);

//printing it pretty
for(const item of menu.entries()) console.log(`${item[0]}: ${item[1]}`)

//printing it peretty with destructuring the array
for(const [index,item] of menu.entries()){
  console.log(`${index}: ${item}`);
} */


/* const prop3 = {
  innerprop1: 'inner property 1',
  innerprop2: 'inner property 2'
}
const sampleObject = {
  prop1: "sample property 1",
  prop2: "sample property 2",
  prop3
}

console.log(sampleObject); */



//TODO:Real life application of optional chaining and nullish coelision
// console.log(restaurant.orderpasta?.('pepper','salt','garlic') ?? "Method not exists");

/* const justObject = {
  name: "Angular",
  age: 6,
  profile(greetName){
    return `Hey ${greetName}, ${this.name} is ${this.age} years old`;
  }
}

console.log(justObject.profile?.('React') ?? "Method not exists"); */



//TODO:Indirect way of looping through object key
/* const properties = Object.keys(restaurant.openingHours);
let restString = `We are open in ${properties.length} days in a week, `

for(const day of properties){
  restString += `${day}, `
}

console.log(restString); */


//FIXME: ********* NEW DATASTRUCTURE SET *********

/* const orderSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza'
]);
console.log(orderSet)

console.log(new Set('React')); */


//TODO:Sample usage of set
/* const staff = ['waiter','chef','waiter','waiter','manager','owner'];

const staffPosition = new Set(staff);
console.log(staffPosition);
 */
//Converting set to array using spread operator
/* const staffPositionArray = [...new Set(staff)];
console.log(staffPositionArray); */



//TODO:Map
/* const rest = new Map();
rest.set('name','bektash');
rest.set(1,'kochi, nettoor');
rest.set(2,'kaloor, kathrikkadavu');
rest.set('open',15);
rest.set('close',23);
rest.set(true,'we are open');
rest.set(false,'we are closed');

console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true))

const time = 20;
console.log(rest.get(time >= rest.get('open') && time <= rest.get('close'))); */




//FIXME:Creating map without using set method
/* const question = new Map([
  ['Question','What is the best programming language in the world ?'],
  [1,'C'],
  [2,'C++'],
  [3,'Java'],
  [4,'Javascript'],
  ['Answer',4],
  [true,'Correct 🎉 🥳'],
  [false,'Try Again 😔 😔']
])

console.log(question); */

//Converting objects to map
/* const hourMap = new Map(Object.entries(restaurant.openingHours));
console.log(hourMap); */

/* const justAnObject = {
  firstEntry: {
    name: "Angular",
    age:10
  },
  secondEntry: {
    name: "React",
    age:12
  }
}

const justaMap = new Map(Object.entries(justAnObject));
console.log(justaMap); */


//TODO: Real life use of Map and also boolean logic
/* console.log(question.get('Question'))
for(const [key,value] of question){
  if(typeof key === 'number') console.log(`Option${key} : ${value}`)
}

const userInput = input.question("Enter the option : ");
console.log(question.get(userInput==question.get('Answer'))) */


//TODO: Convert map to array
/* console.log(...question);
console.log(question.keys());
console.log(question.values());
console.log(question.entries()) */

//TODO: Capitalizing names with Uppercase Split Lowercase Slice Join
/* function capitalizeName(name){
  const names = name.split(' ');
  const correctedName = [];
  for(const singleName of names){
    // correctedName.push(singleName[0].toUpperCase() + singleName.slice(1));   //Method 1 for uppercase
    correctedName.push(singleName.replace(singleName[0],singleName[0].toUpperCase()));    //Method 2 for uppercase
  } 
  return correctedName.join(' ');
}
console.log(capitalizeName("nivi sreedhar vinuraj")) */

//TODO: Masking the credit card
/* function maskCreditCard(cardNumber){
  const cardNumberString = cardNumber + '';
  const lastDigits = cardNumberString.slice(-4)
  return lastDigits.padStart(cardNumberString.length, '*')
}

console.log(maskCreditCard(1234567812345678)); */


//TODO: Formatting the flight string at the start of the file
/* const getCode = str => str.slice(0,3).toUpperCase();
for(const flight of flights.split('+')){
  const [type,from,to,time] = flight.split(';');
  console.log(`${type.startsWith("_Delayed") ? '🔴' : ' '}${type.replaceAll("_"," ")} from ${getCode(from)} to ${getCode(to)} (${time.replace(':','h')})`.padStart(44));
} */