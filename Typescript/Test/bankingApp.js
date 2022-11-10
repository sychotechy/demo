var input = require('readline-sync');
var Bank = /** @class */ (function () {
    function Bank(accountNumber, accountHolderName, accountType, balanceAmount) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountType = accountType;
        this.balanceAmount = balanceAmount;
    }
    Bank.IFSCCode = "FSKOC1234";
    return Bank;
}());
var bankAccounts = [];
var loop = true;
var _loop_1 = function () {
    var option = Number(input.question("\n********** Welcome to FS Bank **********\n    1, Create Account\n    2, Show Details\n    3, Deposite Cash\n    4, Withdraw Cash\n    5, Show Balance\n    6, Exit\nEnter your option : "));
    switch (option) {
        case 1:
            console.log("\n");
            var accNo = input.question("Enter an account number : ");
            var name_1 = input.question("Enter your name : ");
            var accType = input.question("Enter account type : ");
            var bankAccount = new Bank(accNo, name_1, accType, 0);
            bankAccounts.push(bankAccount);
            console.log("##### Account Created successfully #####");
            break;
        case 2:
            var showAccNo_1 = input.question("\nEnter your account number : ");
            if (bankAccounts) {
                bankAccounts.forEach(function (item) {
                    if (item["accountNumber"] == showAccNo_1) {
                        console.log("\n\n***** Account Details *****\nName:- ".concat(item["accountHolderName"], "\nAccount Number :- ").concat(item['accountNumber'], "\nIFSC Code :- ").concat(Bank.IFSCCode, "\nAccount Type:- ").concat(item["accountType"], "\nBalance :- ").concat(item["balanceAmount"], "\n\n"));
                    }
                    else {
                        console.log("No such account");
                    }
                });
            }
            else {
                console.log("No account datas are added");
            }
            break;
        case 3:
            console.log("\n");
            var depositeAcc_1 = input.question("Enter account number for deposite : ");
            var depositeAmount_1 = Number(input.question("Enter amount to deposite : "));
            bankAccounts.forEach(function (item) {
                if (item["accountNumber"] == depositeAcc_1) {
                    item['balanceAmount'] += depositeAmount_1;
                }
            });
            break;
        case 4:
            console.log("\n");
            var withdrawAcc_1 = input.question("Enter account number for withdraw : ");
            var withdrawAmount_1 = Number(input.question("Enter amount to withdraw : "));
            bankAccounts.forEach(function (item) {
                if (item["accountNumber"] == withdrawAcc_1) {
                    item['balanceAmount'] -= withdrawAmount_1;
                }
            });
            break;
        case 5:
            console.log("\n");
            var balanceAcc_1 = input.question("Enter account number for balance details : ");
            bankAccounts.forEach(function (item) {
                if (item["accountNumber"] == balanceAcc_1) {
                    console.log("Balance :- ".concat(item["balanceAmount"]));
                }
            });
        case 6:
            loop = false;
            break;
        default:
            console.log("Enter any of these option");
    }
};
do {
    _loop_1();
} while (loop);
