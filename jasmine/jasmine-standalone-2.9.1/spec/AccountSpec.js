describe('Account', function(){
  var account;
  var transaction_date;

  beforeEach( function(){
    account = new Account();
  });
  it('balance is zero', function(){
    expect(account.balance).toEqual(0)
  });
  it('has a date', function(){
    expect(account.date).not.toBe(null)
  });
  it('balance is £10', function(){
    account.deposit(10)
    expect(account.balance).toEqual(10)
  });
  it('balance is -£10', function(){
    account.withdraw(10)
    expect(account.balance).toEqual(-10)
  });
  it('statement stores balance', function(){
    account.deposit(5);
    expect(account.transactions[0]).toEqual(5);
  });
  it('statement stores deposit as credit', function(){
    account.deposit(5);
    expect(account.transactions[2]).toEqual('Credit');
  });
});
