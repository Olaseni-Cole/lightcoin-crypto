// let balance = 500.00;

class Transaction {
  
  constructor(amount, account) {
    this.amount  = amount;
    this.account  = account;
  }
  
}


class Deposit extends Transaction {
  
//   // Pass in the account that the deposit this for
//   constructora(amount, account) {
//     this.amount = amount;
//     this.account = account;
// }
  
  commit() {
    this.account.balance += this.amount;
  }
  
}

class Withdrawal extends Transaction {

//   constructor(amount, acount) {
//     this.amount = amount;
//     this.account = amount;
//   }

  commit() {
    this.account.balance -= this.amount;
  }

}

class Account {
  
  constructr(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
  }
  
}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99);
t2.commit();
console.log('Transaction 2:', t2);

t3 = new Deposit(120.00);
t3.commit();
console.log('Transaction 3:', t3);

console.log('Balance:', balance);
