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
  it('statement stores date', function(){
    account.deposit(5);
    expect(account.transactions[0][1]).toEqual('Mon Feb 26 2018 16:01:25 GMT+0000 (GMT)');
  });

});
