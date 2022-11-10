class Bank{
    static IFSCCode:string = "FSKOC1234";
    constructor(protected accountNumber:number, protected accountHolderName:string, 
        protected accountType:string, protected balanceAmount:number){}
    
    depositeCash(amount:number):void{
        this.balanceAmount += amount;
    }
    withdrawCash(amount:number):void{
        this.balanceAmount -= amount;
    }
    getBalance():number{
        return this.balanceAmount;
    }
}
let bankAccounts:Bank[] = [];

const bankAccount1:Bank = new Bank(1000111,"Richard","Savings",3000);
bankAccount1.depositeCash(5000);
bankAccount1.withdrawCash(1000);

const bankAccount2:Bank = new Bank(1000112,"Daniel","FD",6000);
bankAccount2.depositeCash(4000);
bankAccount2.withdrawCash(500);

const bankAccount3:Bank = new Bank(1000113,"Alexa","Savings",10000);
bankAccount3.depositeCash(3000);
bankAccount3.withdrawCash(1500);

bankAccounts.push(bankAccount1,bankAccount2,bankAccount3);

bankAccounts.forEach((item,index)=>{
    console.log(`********** Account ${index+1} **********\n
    Name :- ${item["accountHolderName"]}\n
    Account Number :- ${item["accountNumber"]}\n
    IFSC Code :- ${Bank.IFSCCode}\n
    Account Type :- ${item["accountType"]}\n
    Balance Amount :- ${item["balanceAmount"]}\n`)
})