// Closure 
// closure function is a function in which inner function have the 
// Access of outer function's variable. 
// Even the outer function has completed their execution. 

function createAccount(initBalance){
    let balance = initBalance //private variable
    
    return {
        deposit : function(amount){
            balance += amount
            return balance
        },
        
        withdraw : function(amount){
            if(amount>balance){
                return ('Insuficient Balance')
            }
            balance -= amount
            return balance
        },
        getBalance : function(){
            return balance
        }
        
    }
}

const accountA = createAccount(100)
console.log(accountA.deposit(50))
console.log(accountA.withdraw(500))
console.log(accountA.getBalance())
















function createMood(mood){
    return {
        workMood : function(lang){
            if(lang == 'bhojpuri'){
                return('jiyaah ab kaam hoyi!')
            }
            return 'No Energy!!'
        },
        getMood : function(){
            return mood
        }
    }
}

const bihari = createMood('hindi')
console.log(bihari.workMood())

console.log(bihari.workMood('bhojpuri'))