const sampleString = "This is a sample string";
const sampleRegEx = /^[+]91[0-9]{10}$/g;

const regex = new RegExp('is','g');

const mobile = '+911234567890';

const person = {
    firstName: "React",
    lastName: "Developer"
}

const person2 = {
    place: "kochi",
    job: "Developer"
}

const combinedObject = Object.assign(person,person2);
console.log(combinedObject);