"use strict";
const poorUser = {
    name: "Ashequr",
    balance: 78,
    addBalance(balance) {
        return balance + this.balance;
    }
};
poorUser.addBalance(90);
