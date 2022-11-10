let code: string = '123';
// let employeeCode = <number> code;

let employeeCode = code as any as number;
console.log(employeeCode, typeof employeeCode);