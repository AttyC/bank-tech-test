describe('Transaction', function(){
  var transaction;
  var account;

  beforeEach(function(){
    transaction = new Transaction();
    account = new Account();
  });

  describe('transaction', function() {
    it('transaction stores deposit balance', function() {
      spyOn(account, 'deposit').and.returnValue(5);
      account.deposit();
      expect(account.deposit(5)).toEqual(5);
    });
    it('statement stores withdrawal balance', function(){
      spyOn(account, 'withdraw').and.returnValue(-5);
      account.withdraw();
      expect(account.withdraw(5)).toEqual(-5);
    });
  });
});
