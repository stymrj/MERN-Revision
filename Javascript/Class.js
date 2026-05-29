let myName = 'Satyam Raj'
let myEmail = 'sstymrj@gmail.com'
let phone = '8302783900'

class User{
    constructor(myName,myEmail,phone){
        this.name = myName
        this.email = myEmail
        this.phone = phone
    }
}


const user2 = new User(myName,myEmail,phone)

const user1 = new User('Satyam Raj', 'ersatyamraj2@gmail.com', '8302784900')

console.log(user1)
console.log(user2)



class Car{
    constructor(name,year){
        this.name = name
        this.year = year
    }

    age(){
        const date = new Date()
        return date.getFullYear() - this.year
        
    }
}

const myCar = new Car('Mercedes', 2020)

console.log(myCar)

document.getElementById('div').innerText = 'My Car age is ' + myCar.age()




class Book{
    constructor(name,year=2020){
        this.name = name
        this.year = year
    }
    //getting the name of the book

    getter(){
        return this.name + ' was published in ' + this.year
    }
    //setting the name of the book

    setter(newYear){
        this.year = newYear
        return this.name + ' was published in ' + this.year
    }
}

class Coding extends Book{
    constructor(lang,name){
        super(name)
        this.language = lang
    }
}

const book1 = new Book('Code by Satyam',2024)
console.log(book1)
console.log(book1.setter(2025))

const codingBook = new Coding('Javascript','Js by Satyam')

console.log(codingBook)

