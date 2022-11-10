var Employee = /** @class */ (function () {
    function Employee(employeeId, employeeName, designation, salary) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.designation = designation;
        this.salary = salary;
    }
    Employee.prototype.incrementSalary = function (incentive) {
        this.salary += incentive;
    };
    Employee.companyCode = "FS1234";
    return Employee;
}());
var employeeDatas = [];
var employeeObj1 = new Employee(101, "Jack", "Software Engineer", 15300);
employeeObj1.incrementSalary(700);
var employeeObj2 = new Employee(102, "David", "Software Tester", 10700);
employeeObj1.incrementSalary(300);
var employeeObj3 = new Employee(103, "Robert", "UI Designer", 14500);
employeeObj1.incrementSalary(500);
var employeeObj4 = new Employee(101, "William", "IT Support", 14500);
employeeObj1.incrementSalary(500);
employeeDatas.push(employeeObj1, employeeObj2, employeeObj3, employeeObj4);
function displayEmployees() {
    employeeDatas.forEach(function (item, index) {
        console.log("   ********** Employee ".concat(index + 1, " **********\n\n        Company code :- ").concat(Employee.companyCode, "\n\n        Employee Id :- ").concat(item["employeeId"], "\n\n        Name :- ").concat(item["employeeName"], "\n\n        Designation :- ").concat(item["designation"], "\n\n        Salary :- ").concat(item["salary"], "\n\n"));
    });
}
displayEmployees();
function removeEmployee(employeeId) {
    for (var i = 0; i < employeeDatas.length; i++) {
        if (employeeDatas[i]["employeeId"] == employeeId) {
            employeeDatas.splice(i, 1);
        }
    }
}
removeEmployee(101);
console.log("\n\n\n********************After removeEmployee************************\n");
displayEmployees();
