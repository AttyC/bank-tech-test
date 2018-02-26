(function(exports){

  function Account(){
    this.balance = 0;
    this.isCredit = false;
    this.transactionClass = new Transaction();
  }

  Account.prototype.deposit = function (amount) {
    this.balance += amount;
    this.isCredit = true;
    this.transactionClass.storeTransaction(amount, this.isCredit, this.balance);
  };
  Account.prototype.withdraw = function (amount) {
    this.balance -= amount;
    this.transactionClass.storeTransaction(amount, this.isCredit, this.balance);
  };

  exports.Account = Account;
})(this)
