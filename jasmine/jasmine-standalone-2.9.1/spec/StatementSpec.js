describe('Statement', function(){
  var statement;

  beforeEach(function(){
    statement = new Statement();
    transaction = {
      createTransaction: function(5, true, 5){}
    }
    account = {
      deposit: function(){},
      withdraw: function(){}
    }
  });

  describe('statement', function() {
    it('stores a transaction', function() {
      transaction.createTransaction(5, true, 5)
      expect(transaction.statementClass.statement[0].balance).toEqual(5);
    });
  });

});
