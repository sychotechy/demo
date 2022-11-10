const input = require('readline-sync');

class Bank{
    static IFSCCode:string = "FSKOC1234";
    constructor(protected accountNumber:number, protected accountHolderName:string, 
        protected accountType:string, protected balanceAmount:number){}
}
let bankAccounts:object[] = [];

let loop = true;
do{
    let option = Number(input.question(`\n********** Welcome to FS Bank **********
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
            let accType = input.question("Enter account type : ");
            let bankAccount:Bank = new Bank(accNo,name,accType,0);
            bankAccounts.push(bankAccount);
            console.log("##### Account Created successfully #####")
            break;

        case 2:
            let showAccNo = input.question("\nEnter your account number : ");
            if(bankAccounts){
                bankAccounts.forEach((item)=>{
                    if(item["accountNumber"]==showAccNo){
                        console.log(`\n\n***** Account Details *****\nName:- ${item["accountHolderName"]}\nAccount Number :- ${item['accountNumber']}\nIFSC Code :- ${Bank.IFSCCode}\nAccount Type:- ${item["accountType"]}\nBalance :- ${item["balanceAmount"]}\n\n`)
                    }else{
                        console.log("No such account")
                    }
                })
            }
            else{
                console.log("No account datas are added");
            }
            break;
            
        case 3:
            console.log("\n");
            let depositeAcc = input.question("Enter account number for deposite : ");
            let depositeAmount = Number(input.question("Enter amount to deposite : "));
            bankAccounts.forEach((item)=>{
                if(item["accountNumber"]==depositeAcc){
                    item['balanceAmount'] += depositeAmount;
                }
            })
            break;

        case 4:
            console.log("\n");
            let withdrawAcc = input.question("Enter account number for withdraw : ");
            let withdrawAmount = Number(input.question("Enter amount to withdraw : "));
            bankAccounts.forEach((item)=>{
                if(item["accountNumber"]==withdrawAcc){
                    item['balanceAmount'] -= withdrawAmount;
                }
            })
            break;
            
        case 5:
            console.log("\n");
            let balanceAcc = input.question("Enter account number for balance details : ");
            bankAccounts.forEach((item)=>{
                if(item["accountNumber"]==balanceAcc){
                    console.log(`Balance :- ${item["balanceAmount"]}`);
                }
            })
            break;
        case 6:
            loop = false;
            break;
        default:
            console.log("Enter any of these option");
    }
}while(loop)