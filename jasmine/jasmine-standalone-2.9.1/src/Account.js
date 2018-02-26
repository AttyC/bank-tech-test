function Account(){
  this.balance = 0;
  var date;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  this.storeTransaction(this.balance);

};
Account.prototype.withdraw = function (amount) {
  this.balance -= amount;
  return this.balance;
};

Account.prototype.storeTransaction = function (balance) {
  date = new Date();
  this.transactions.push(balance, date);
  return this.transactions;
};
