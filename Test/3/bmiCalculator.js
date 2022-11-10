var input = require('readline-sync');
let markMass = input.question("Enter Mark's mass (in Kg) : ");
let markHeight = input.question("Enter Mark's height (in M) : ");
let johnMass = input.question("Enter John's mass : ");
let johnHeight = input.question("Enter John's height : ");
let markBmi = markMass/(markHeight*markHeight);
let johnBmi = johnMass/(johnHeight*johnHeight);
let markHeigherBMI = markBmi>johnBmi;
console.log(markHeigherBMI)