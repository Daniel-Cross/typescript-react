type account = { money: number, deposit: (value: number) => void};

let bankAccount: account = {
    money: 2000,
    deposit(value: number): void{
        this.money += value;
    }
}

let myself: { name: string, bankAccount: account, hobbies: string[]} = {
    name: 'Dan',
    bankAccount: bankAccount,
    hobbies: ['music', 'football']
};

myself.bankAccount.deposit(3000);

console.log(myself); 