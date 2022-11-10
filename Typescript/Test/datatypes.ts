//TODO: Number
/* let num1:number = 120;
console.log(num1);

let num2:number = 12.1234;
console.log(num2.toFixed(2)); */



//TODO: Sting
/* let firstName:string = "React";
let secondName:string = "Native";
console.log(firstName + " " + secondName);
console.log(firstName.concat(secondName)); */



//TODO: Boolean
/* let isPresent:boolean = true;
console.log(isPresent);

let isAvailable = false;
console.log(isAvailable); */



//TODO: Arrays
/* let strArray1:string[] = ["React","Angular","Vue"];
let strArray2:Array<string> = ["React","Angular","Vue"];
let strArray3:(string)[] = ["React","Angular","Vue"];

console.log(strArray1);
console.log(strArray2);
console.log(strArray3);

//multitype array
let arr1:Array<string|number> = [1,"React",2,"Angular"];
let arr2:(string|number|boolean)[] = [1,"React",false,2,"Angular",true]

console.log(arr1);
console.log(arr2); */



//TODO: Tuple
/* let student:[number,string] = [1,"Angular"];

//array of tuples
let students:[number,string][] = [[1,"Angular"],[2,"React"],[3,"Vue"]];
console.log(students);

//accessing tuple elements
console.log(student[0]);
console.log(student[1]);

console.log(students[0]);
console.log(students[1]);

//adding elements to tuple
student.push(2,"React");
console.log(student); */



//TODO: Enum
/* enum PrintMedia{
    Newspaper,
    Newsletter,
    Magazine,
    Book
}                       //Numeric Enum
console.log(PrintMedia)

enum PrintMedia{
    Newspaper = 1,
    Newsletter = 3,
    Magazine = 9,
    Book = 7
} 

console.log(PrintMedia) */


/* enum PrintMedia{
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}                           //String enum
console.log(PrintMedia); */


/* enum Status{
    active = "ACTIVE",
    deactivated = 1,
    pending
}                          //Heterogeneous enum
console.log(Status); */


/* enum PrintMedia{
    Newspaper = 1,
    Newsletter = 3,
    Magazine = 9,
    Book = 7
} 
console.log(PrintMedia.Newspaper);
console.log(PrintMedia.Newsletter);
console.log(PrintMedia["Newsletter"]);
console.log(PrintMedia[3]); */


//TODO: Union
/* let something:(string|number|boolean);
something = "abc";
something = 10;
something = true;
console.log(something); */


//Practical use of union
/* function displayType(item:(string|number|boolean)){
    switch(typeof(item)){
        case "string":
            console.log("String type");
            break;
        case "number":
            console.log("Number type");
            break;
        case "boolean":
            console.log("Boolean type");
            break;
        default:
            console.log("Some undisclosed type")
    }
}

displayType(undefined); */



//TODO: Any
/* let anything:any;
anything = "anything";
anything = 100;
anything = true;
console.log(anything); */



