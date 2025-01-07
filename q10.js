class BankAccount {
   
    constructor(accountHolder, balance = 0) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${this.accountHolder} deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    
    withdraw(amount) {
        if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
            console.log(`${this.accountHolder} withdrew $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Insufficient balance or invalid amount.");
        }
    }

    
    getBalance() {
        return this.balance;
    }
}


function transfer(fromAccount, toAccount, amount) {
    if (fromAccount.getBalance() >= amount) {
        fromAccount.withdraw(amount);      
        toAccount.deposit(amount);         
        console.log(`Transferred $${amount} from ${fromAccount.accountHolder} to ${toAccount.accountHolder}`);
    } else {
        console.log("Transfer failed: Insufficient balance in the sender's account.");
    }
}


let account1 = new BankAccount("Hari", 1000);
let account2 = new BankAccount("Manu", 500);

account1.deposit(200); 
account2.withdraw(100); 


transfer(account1, account2, 300);

console.log(`${account1.accountHolder}'s final balance: $${account1.getBalance()}`);
console.log(`${account2.accountHolder}'s final balance: $${account2.getBalance()}`); 
