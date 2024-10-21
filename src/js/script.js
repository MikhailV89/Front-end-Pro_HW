'use strict';

function BankAccount(initialBalance) {
  let balance = initialBalance;

  this.deposit = function (amount) {
    if (amount > 0) {
      balance += amount;
      console.log(`Deposit: +${amount}. New balance: ${balance}`);
    } else {
      console.log('Deposit amount must be greater than zero.');
    }
  };

  this.withdraw = function (amount) {
    if (amount > 0 && amount <= balance) {
      balance -= amount;
      console.log(`Withdrawal: -${amount}. New balance: ${balance}`);
    } else {
      console.log('Insufficient funds or invalid amount.');
    }
  };

  this.getBalance = function () {
    return balance;
  };
}

const myAccount = new BankAccount(150);
myAccount.deposit(70);
myAccount.withdraw(25);
console.log(myAccount.getBalance());
