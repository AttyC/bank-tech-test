(function(exports){

  function Statement(){
    this.statement = []

  }
  Statement.prototype.updateStatement = function (transaction) {
    this.transaction = transaction
    this.statement.push(this.transaction)
    return this.statement;
  };
  exports.Statement = Statement;
})(this)
