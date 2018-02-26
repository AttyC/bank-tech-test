(function(exports){

  function Transaction(){
    this.transaction = {
      date: null,
      credit: null,
      debit: null,
      balance: 0
    };
  }

  Transaction.prototype.storeTransaction = function (amount, isCredit, balance) {
    this.transaction['date'] = new Date();
    if (this.isCredit) {
        this.transaction['credit'] = amount;
    } else {
        this.transaction['debit'] = amount;
    }
    this.transaction['balance'] = balance;
    console.log(this.transaction);
    return this.transaction;
  };
  exports.Transaction = Transaction;
  
})(this)
