let arr = [4,3,7,14,56,65]

//area
const calculateArea = function(arr){
    let output = []
    for(let i=0;i<arr.length;i++){
        output.push(Math.PI * arr[i] * arr[i])
    }
    return output
}

console.log(calculateArea(arr))

const calculateCircumference = function(arr){
    let output = []
    for(let i=0;i<arr.length;i++){
        output.push(Number(Math.PI * 2 * arr[i]).toFixed(2))
    }
    return output
}
console.log(calculateCircumference(arr))


// >>>>>>>>>>>>>>>>>.. high order function

const area = function(radius){
    return Math.PI * radius * radius
}

const calculate = function(arr, logic){
    let output = []
    for(let i=0;i<arr.length;i++){
        output.push(logic(arr[i]))
    }
    return output
}

console.log(calculate(arr,area))



//>>>>>>>>>>>>>>>>>>>>>>>>>> Exmple

const multiplyBy = function(multiplier){
    return function(num){
        return multiplier* num
    }
}

const double = multiplyBy(2)
console.log(double(19))