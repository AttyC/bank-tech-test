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
      account.deposit(10)
      expect(account.balance).toEqual(10)
    });
  });

  describe('withdrawals', function(){

    beforeEach( function(){
      account = new Account();
    });
    it('balance is -£10', function(){
      account.withdraw(10)
      expect(account.balance).toEqual(-10)
    });
  });
});
