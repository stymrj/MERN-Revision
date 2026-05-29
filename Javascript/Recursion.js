//Recursion - A function which call itself.
// it is way to solve the problem by breaking them down into smaller, similar sub problem

// 1. Print CountDown

function CountDown(n){
    //base case
    if(n<=0){
        console.log('Done!')
        return
    }
    //task
    console.log(n)

    //small problem
    CountDown(n-1)
}

CountDown(5)




// 2. Factorial Of a Number

function Factorial(n){
    //base case
    if(n<=1){
        return 1
    }
    return n*Factorial(n-1)
}

console.log(Factorial(2))


// 3. Fibannoci Number
//