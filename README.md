## Bank Tech Test

A simple technical test, written in JavaScript.  
The purpose is to work in the console only (no API) and crate an account, deposit and withdraw funds and print a statement.  

Written in plain JavaScript with Jasmine for testing.

## Brief
#Requirements  
You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)  
Deposits, withdrawal.  
Account statement (date, amount, balance) printing.  
Data can be kept in memory (it doesn't need to be stored to a database or anything).  

#Acceptance criteria  
Given a client makes a deposit of 1000 on 10-01-2012  
And a deposit of 2000 on 13-01-2012  
And a withdrawal of 500 on 14-01-2012  
When she prints her bank statement  
Then she would see  

date || credit || debit || balance  
14/01/2012 || || 500.00 || 2500.00  
13/01/2012 || 2000.00 || || 3000.00  
10/01/2012 || 1000.00 || || 1000.00  

## Example in console
open SpecRunner.html in browser and open console (Cmd Alt J on a Mac)
```
account = new Account();
account.deposit(30);
account.balance => 30
account.withdraw(10) => 20

```

## Tests

To run tests, open SpecRunner.html in browser

## If I had more time

I would add a Statement class and tests, fix the transactions pushing to the statement, then print the statement.
