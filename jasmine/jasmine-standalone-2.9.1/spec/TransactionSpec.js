describe('Transaction', function(){
  var transaction;
  var account;

  beforeEach(function(){
    transaction = new Transaction();
    transaction.date = '10/12/21'
  });

  describe('createTransaction', function() {
    it('stores deposit balance', function() {
      transaction.createTransaction(5, true, 10)
      expect(transaction.transaction.balance).toEqual(10)
    });
  });
});
