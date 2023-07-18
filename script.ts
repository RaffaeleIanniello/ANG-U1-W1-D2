class BankAccount {
    protected balance: number;
  
    constructor(balanceInit: number = 0) {
      this.balance = balanceInit;
    }
  
    deposit(quant: number): void {
      this.balance += quant;
    }
  
    withdraw(quant: number): void {
      if (this.balance >= quant) {
        this.balance -= quant;
      } else {
        console.log("Fondi non suff.");
      }
    }
  
    getBalance(): number {
      return this.balance;
    }
  }
  
  class SonAccount extends BankAccount {
    // Inherits properties and methods from BankAccount
  
    constructor(balanceInit: number = 0) {
      super(balanceInit);
    }
  }
  
  class MotherAccount extends BankAccount {
    constructor(balanceInit: number = 0) {
      super(balanceInit);
    }
  
    addInterest(): void {
      const interest = this.balance * 0.1;
      this.balance += interest;
    }
  }
  
  // Creazione dei conti correnti
  const sonAccount = new SonAccount();
  const motherAccount = new MotherAccount();
  
  // Operazioni sul conto del figlio
  sonAccount.deposit(100);
  sonAccount.withdraw(50);
  
  // Operazioni sul conto della madre
  motherAccount.deposit(500);
  motherAccount.withdraw(200);
  motherAccount.addInterest();
  
  // Stampa dei saldi attuali
  console.log("Saldo conto figlio: ", sonAccount.getBalance());
  console.log("Saldo conto madre: ", motherAccount.getBalance());
  