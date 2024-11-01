"use strict";
function Add(num1, num2) {
    return num1 + num2;
}
Add(1, 2);
const add = (num1, num2) => num1 + num2;
//method
const poorUser = {
    name: "Rimon",
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    }
};
