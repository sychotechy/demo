var Student = /** @class */ (function () {
    function Student(rollno, name, batch, year, marks) {
        this.rollno = rollno;
        this.name = name;
        this.batch = batch;
        this.year = year;
        this.marks = marks;
    }
    Student.prototype.calcTotal = function () {
        /* let total:number = 0;
        this.marks.forEach((item)=>{
            total = total + item;
        })
        return total; */
        return this.marks.reduce(function (x, y) { return x + y; });
    };
    Student.prototype.calcAverage = function () {
        /* let total:number = 0;
        this.marks.forEach((item)=>{
            total = total + item;
        })
        return total/this.marks.length; */
        return this.marks.reduce(function (x, y) { return x + y; }) / this.marks.length;
    };
    Student.prototype.displayDetails = function () {
        console.log("********** Student Details **********\n\n        Roll No :- ".concat(this.rollno, "\n\n        Name :- ").concat(this.name, "\n\n        Batch :- ").concat(this.batch, "\n\n        Year :- ").concat(this.year, "\n\n        Marks :- ").concat(this.marks, "\n\n        Total Marks :- ").concat(this.calcTotal(), "\n\n        Average Marks :- ").concat(this.calcAverage()));
    };
    return Student;
}());
var studentObj = new Student(111, "React", 'CS', 2020, [48, 39, 49, 50]);
console.log(studentObj);
console.log(studentObj.calcAverage());
studentObj.displayDetails();
