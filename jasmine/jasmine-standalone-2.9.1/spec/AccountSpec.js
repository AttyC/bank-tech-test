//understands its balance
describe('Account', function(){
  var account;

  describe('initialise', function(){

    beforeEach( function(){
      account = new Account();
    });
    it('balance is zero', function(){
      expect(account.balance).toEqual(0)
    });;
  });

  describe('deposits', function(){

    beforeEach( function(){
      account = new Account();
    });
    it('balance is £10', function(){
      expect(account.deposit(10)).toEqual(10)
    });
  });

  describe('withdrawals', function(){

    beforeEach( function(){
      account = new Account();
    });
    it('balance is -£10', function(){
      expect(account.withdraw(10)).toEqual(-10)
    });
  });
});
