class Employee{
    static companyCode:string = "FS1234";
    constructor(public employeeId:number,public employeeName:string, public designation:string,
        public salary:number){}
    incrementSalary(incentive:number){
        this.salary += incentive;
    }
}
let employeeDatas:Employee[] = [];

const employeeObj1:Employee = new Employee(101,"Jack","Software Engineer",15300);
employeeObj1.incrementSalary(700);
const employeeObj2:Employee = new Employee(102,"David","Software Tester",10700);
employeeObj1.incrementSalary(300);
const employeeObj3:Employee = new Employee(103,"Robert","UI Designer",14500);
employeeObj1.incrementSalary(500);
const employeeObj4:Employee = new Employee(101,"William","IT Support",14500);
employeeObj1.incrementSalary(500);

employeeDatas.push(employeeObj1,employeeObj2,employeeObj3,employeeObj4);

function displayEmployees(){
    employeeDatas.forEach((item,index)=>{
        console.log(`   ********** Employee ${index+1} **********\n
        Company code :- ${Employee.companyCode}\n
        Employee Id :- ${item["employeeId"]}\n
        Name :- ${item["employeeName"]}\n
        Designation :- ${item["designation"]}\n
        Salary :- ${item["salary"]}\n\n`);
    })
}

displayEmployees();


function removeEmployee(employeeId:number){
    for(let i=0;i<employeeDatas.length;i++){
        if(employeeDatas[i]["employeeId"]==employeeId){
            employeeDatas.splice(i,1);
        }
    }
}
removeEmployee(101);

console.log("\n\n\n********************After removeEmployee************************\n")

displayEmployees();