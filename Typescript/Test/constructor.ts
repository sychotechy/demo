class Person{
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
console.log(student2);