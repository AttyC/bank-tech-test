(function(exports){

  function Transaction(){
    this.transaction = {
      date: '10/12/21',
      credit: null,
      debit: null,
      balance: 0
    };
    // this.statementClass = new Statement();
  }

  Transaction.prototype.createTransaction = function (amount, isCredit, balance) {
    this.isCredit = isCredit;
    this.transaction['date'] = this.transaction.date
    this.transaction['balance'] = balance;
    if (this.isCredit == true) {this.transaction['credit'] = amount; } else { this.transaction['debit'] = amount; }
    // this.statementClass.updateStatement(this.transaction);
    return this.transaction
  };
  exports.Transaction = Transaction;

})(this)
