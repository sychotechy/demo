var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var input = require('readline-sync');
var Bank = /** @class */ (function () {
    function Bank() {
        this.bankName = "FS Bank";
        this.IFSCCode = "FSKOC1234";
        this.branchName = "Kaloor";
    }
    return Bank;
}());
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account(accountNumber, accountType, balance) {
        var _this = _super.call(this) || this;
        _this.accountNumber = accountNumber;
        _this.accountType = accountType;
        _this.balance = balance;
        return _this;
    }
    Account.prototype.checkBalance = function () {
        return this.balance;
    };
    return Account;
}(Bank));
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(customerName, customerAadhaar, accountNumber, accountType, balance) {
        var _this = _super.call(this, accountNumber, accountType, balance) || this;
        _this.customerName = customerName;
        _this.customerAadhaar = customerAadhaar;
        _this.accountNumber = accountNumber;
        _this.accountType = accountType;
        _this.balance = balance;
        return _this;
    }
    return Customer;
}(Account));
var bankAccounts = [];
var loop = true;
var _loop_1 = function () {
    var option = Number(input.question("\n********** Welcome to FS Bank **********\n    1, Create Account\n    2, Show Details\n    3, Deposite Cash\n    4, Withdraw Cash\n    5, Show Balance\n    6, Exit\nEnter your option : "));
    switch (option) {
        case 1:
            console.log("\n");
            var accNo = input.question("Enter an account number : ");
            var name_1 = input.question("Enter your name : ");
            var aadhaar = input.question("Enter your aadhaar number : ");
            var accType = input.question("Enter account type : ");
            var depamt = input.question("Enter amount to deposite : ");
            var newAccount = new Customer(name_1, aadhaar, accNo, accType, depamt);
            bankAccounts.push(newAccount);
            console.log("##### Account Created successfully #####");
            break;
        case 2:
            var showAccNo_1 = input.question("\nEnter your account number : ");
            bankAccounts.forEach(function (item) {
                if (Object.entries(item)[3].includes(showAccNo_1)) {
                    console.log(item);
                }
            });
            break;
        case 3:
            console.log("\n");
            var depositeAcc_1 = input.question("Enter account number for deposite : ");
            var depositeAmount_1 = Number(input.question("Enter amount to deposite : "));
            bankAccounts.forEach(function (item) {
                if (Object.entries(item)[3].includes(depositeAcc_1)) {
                    var currentAmount = Number(item['balance']);
                    currentAmount += depositeAmount_1;
                    item['balance'] = currentAmount;
                }
            });
            break;
        case 4:
            console.log("\n");
            var withdrawAcc_1 = input.question("Enter account number for withdraw : ");
            var withdrawAmount_1 = Number(input.question("Enter amount to withdraw : "));
            bankAccounts.forEach(function (item) {
                if (Object.entries(item)[3].includes(withdrawAcc_1)) {
                    item['balance'] -= withdrawAmount_1;
                }
            });
            break;
        case 5:
            console.log("\n");
            var balanceAcc_1 = input.question("Enter account number for balance details : ");
            bankAccounts.forEach(function (item) {
                if (Object.entries(item)[3].includes(balanceAcc_1)) {
                    console.log("Balance :- ".concat(item["balance"]));
                }
            });
        case 6:
            loop = false;
            break;
        default:
            console.log("Enter any of these options....");
    }
};
do {
    _loop_1();
} while (loop);
