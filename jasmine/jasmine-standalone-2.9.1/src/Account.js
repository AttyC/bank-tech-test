function Account(){
  this.balance = 0;
  var date;
  this.transactions = [];
  var state;
}

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  state = 'Credit';
  this.storeTransaction(this.balance, state);

};
Account.prototype.withdraw = function (amount) {
  this.balance -= amount;
    state = 'Debit';
  this.storeTransaction(this.balance, state);
};

Account.prototype.storeTransaction = function (balance, state) {
  date = new Date();
  this.transactions.push(balance, date, state);
};
