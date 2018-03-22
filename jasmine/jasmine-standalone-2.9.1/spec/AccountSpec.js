//understands its balance
describe('Account', function(){
  var account;

  beforeEach( function(){
    account = new Account();
  });

  describe('initialise', function(){
    it('balance is zero', function(){
      expect(account.balance).toEqual(0)
    });
  });

  describe('deposits', function(){
    it('balance is £10', function(){
      expect(account.deposit(10)).toEqual(10)
    });
  });

  describe('withdrawals', function(){
    it('balance is -£10', function(){
      expect(account.withdraw(10)).toEqual(-10)
    });
  });
});
