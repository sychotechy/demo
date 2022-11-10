var Bank = /** @class */ (function () {
    function Bank(accountNumber, accountHolderName, accountType, balanceAmount) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountType = accountType;
        this.balanceAmount = balanceAmount;
    }
    Bank.prototype.depositeCash = function (amount) {
        this.balanceAmount += amount;
    };
    Bank.prototype.withdrawCash = function (amount) {
        this.balanceAmount -= amount;
    };
    Bank.prototype.getBalance = function () {
        return this.balanceAmount;
    };
    Bank.IFSCCode = "FSKOC1234";
    return Bank;
}());
var bankAccounts = [];
var bankAccount1 = new Bank(1000111, "Richard", "Savings", 3000);
bankAccount1.depositeCash(5000);
bankAccount1.withdrawCash(1000);
var bankAccount2 = new Bank(1000112, "Daniel", "FD", 6000);
bankAccount2.depositeCash(4000);
bankAccount2.withdrawCash(500);
var bankAccount3 = new Bank(1000113, "Alexa", "Savings", 10000);
bankAccount3.depositeCash(3000);
bankAccount3.withdrawCash(1500);
bankAccounts.push(bankAccount1, bankAccount2, bankAccount3);
bankAccounts.forEach(function (item, index) {
    console.log("********** Account ".concat(index + 1, " **********\n\n    Name :- ").concat(item["accountHolderName"], "\n\n    Account Number :- ").concat(item["accountNumber"], "\n\n    IFSC Code :- ").concat(Bank.IFSCCode, "\n\n    Account Type :- ").concat(item["accountType"], "\n\n    Balance Amount :- ").concat(item["balanceAmount"], "\n"));
});
