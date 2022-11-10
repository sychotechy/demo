const input = require('readline-sync');

abstract class Bank{
    readonly bankName:string = "FS Bank";
    readonly IFSCCode:string = "FSKOC1234";
    readonly branchName:string = "Kaloor";
}
class Account extends Bank{
    constructor(public accountNumber:number, public accountType:string, public balance:number){
        super();
    }
    checkBalance():number{
        return this.balance;
    }
}
class Customer extends Account{
    constructor(public customerName:string, public customerAadhaar:number,public accountNumber:number, public accountType:string, public balance:number){
        super(accountNumber,accountType,balance);
    }
}

let bankAccounts:object[] = [];

let loop:boolean = true;
do{
    let option:number = Number(input.question(`\n********** Welcome to FS Bank **********
    1, Create Account
    2, Show Details
    3, Deposite Cash
    4, Withdraw Cash
    5, Show Balance
    6, Exit
Enter your option : `));

    switch(option){
        case 1:
            console.log("\n");
            let accNo = input.question("Enter an account number : ");
            let name = input.question("Enter your name : ");
            let aadhaar = input.question("Enter your aadhaar number : ");
            let accType = input.question("Enter account type : ");
            let depamt = input.question("Enter amount to deposite : ");
            const newAccount:Bank = new Customer(name,aadhaar,accNo,accType,depamt);
            bankAccounts.push(newAccount);
            console.log("##### Account Created successfully #####")
            break;

        case 2:
            let showAccNo = input.question("\nEnter your account number : ");
            bankAccounts.forEach((item)=>{
                if(Object.entries(item)[3].includes(showAccNo)){
                    console.log(item);
                }
            })
            break;

        case 3:
            console.log("\n");
            let depositeAcc = input.question("Enter account number for deposite : ");
            let depositeAmount = Number(input.question("Enter amount to deposite : "));
            bankAccounts.forEach((item)=>{
                if(Object.entries(item)[3].includes(depositeAcc)){
                    let currentAmount = Number(item['balance']);
                    currentAmount += depositeAmount;
                    item['balance'] = currentAmount;
                }
            })
            break;

        case 4:
            console.log("\n");
            let withdrawAcc = input.question("Enter account number for withdraw : ");
            let withdrawAmount = Number(input.question("Enter amount to withdraw : "));
            bankAccounts.forEach((item)=>{
                if(Object.entries(item)[3].includes(withdrawAcc)){
                    item['balance'] -= withdrawAmount;
                }
            })
            break;

        case 5:
            console.log("\n");
            let balanceAcc = input.question("Enter account number for balance details : ");
            bankAccounts.forEach((item)=>{
                if(Object.entries(item)[3].includes(balanceAcc)){
                    console.log(`Balance :- ${item["balance"]}`);
                }
            })
            break;

        case 6:
            loop = false;
            break;

        default:
            console.log("Enter any of these options....");
    }

}while(loop)