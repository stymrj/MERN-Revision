// Call Apply Bind is the methods to explicitly set the value of this in a function

//Call

let person1 = {
    name : 'Satyam Raj',
    fullName :  function(){
        console.log(this.name)
    }
}

let person2 ={
    name : 'Ayush'
}


person1.fullName()
person1.fullName.call(person2)




const greet = function(hometown, state){
    console.log(`My name is ${this.name} and I belongs to ${hometown + ' ' + state}`)
}

greet.call(person1, "Sheohar", "Bihar")

greet.apply(person2,['Patna', 'Bihar'])

const bindedData = greet.bind(person1, 'Dehradun', 'India')

bindedData()

console.log(bindedData)
