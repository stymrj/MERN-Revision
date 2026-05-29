function BankAccount(accountName, balance = 0){
    this.accountName = accountName
    this.balance = balance
    this.accountNumber = Date.now()
}

const satyamAcc = new BankAccount('satyam',10000)

console.log(satyamAcc)


//closures

function createBankAccount(init){
    let balanc = init
    return {
        getBalance : function(){
            return balanc
        },
        deposit : function(amount){
            balanc += amount
            return balanc;
        }

    }
}

const satyan = new createBankAccount(1000)

console.log(satyan.getBalance())