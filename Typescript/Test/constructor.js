/* class Person{
    constructor(public name:string){};
}
class Student extends Person{
    constructor(public name:string, public age:number){
        super(name);
    }
}

const student1:Person = new Student("Angular",10);
const student2:Person = new Student("React",5);

console.log(student1);
console.log(student2); */
var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    ;
    Student.prototype.result = function (grade) {
        if (grade.includes('A') || grade.includes('B')) {
            console.log("Well done");
        }
        else {
            console.log("Needs to improve");
        }
    };
    Student.prototype.show = function () {
        this.result(this.grade);
    };
    return Student;
}());
var student1 = new Student("Alexa", 18, "A");
student1.show();
