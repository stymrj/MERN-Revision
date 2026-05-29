// this refers to the  object which is executing the current functions
// value of this depend on How it has been called, not where it is defined.

// Gloal Context -> Window Object
console.log(this)


//Regular Function
function hello(){
    console.log(this)
}
hello()

// Arrow function 
// arrow functions dont have their this they inherit this from their parent scope

let employee = {
    name : 'Rahul',
    printName : function(){
        console.log(this.name) // rahul
    },
    printNames : ()=>{
        console.log(this) // undefined -> window object
    }
}

employee.printName()
employee.printNames()




















// Call Apply Bind

let obj = {
    name : 'Satyam',
    printName : function(){
        console.log(this)
    }
}

let obj2 = {
    name : 'Raj'
}


obj.printName()

//call the printName functions 

obj.printName.call(obj2)