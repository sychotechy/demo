class Student{
    rollno:number;
    name:string;
    batch:string;
    year:number;
    marks:number[];
    constructor(rollno:number,name:string,batch:string,year:number,marks:number[]){
        this.rollno = rollno;
        this.name = name;
        this.batch = batch;
        this.year = year;
        this.marks = marks;
    }
    calcTotal():number{
        /* let total:number = 0;
        this.marks.forEach((item)=>{
            total = total + item;
        })
        return total; */
        return this.marks.reduce((x,y)=>x+y)
    }
    calcAverage():number{
        /* let total:number = 0;
        this.marks.forEach((item)=>{
            total = total + item;
        })
        return total/this.marks.length; */
        return this.marks.reduce((x,y)=>x+y)/this.marks.length
    }
    displayDetails():void{
        console.log(`********** Student Details **********\n
        Roll No :- ${this.rollno}\n
        Name :- ${this.name}\n
        Batch :- ${this.batch}\n
        Year :- ${this.year}\n
        Marks :- ${this.marks}\n
        Total Marks :- ${this.calcTotal()}\n
        Average Marks :- ${this.calcAverage()}`);
    }
}

let studentObj:Student = new Student(111,"React",'CS',2020,[48,39,49,50]);
console.log(studentObj);
console.log(studentObj.calcAverage());
studentObj.displayDetails();