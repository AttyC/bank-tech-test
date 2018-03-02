(function(exports){

  function Account(){
    this.balance = 0;
    this.isCredit = false;
  }

  Account.prototype.deposit = function (amount) {
    return this.balance += amount;
  };
  Account.prototype.withdraw = function (amount) {
    return this.balance -= amount;
  };

  exports.Account = Account;
})(this)
