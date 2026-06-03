let myName = "Satyam Raj";
let myEmail = "sstymrj@gmail.com";
let phone = "8302783900";

class User {
  constructor(myName, myEmail, phone) {
    this.name = myName;
    this.email = myEmail;
    this.phone = phone;
  }
}

const user2 = new User(myName, myEmail, phone);

const user1 = new User("Satyam Raj", "ersatyamraj2@gmail.com", "8302784900");

console.log(user1);
console.log(user2);

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Mercedes", 2020);

console.log(myCar);

document.getElementById("div").innerText = "My Car age is " + myCar.age();

class Book {
  constructor(name, year = 2020) {
    this.name = name;
    this.year = year;
  }
  //getting the name of the book

  getter() {
    return this.name + " was published in " + this.year;
  }
  //setting the name of the book

  setter(newYear) {
    this.year = newYear;
    return this.name + " was published in " + this.year;
  }
}

class Coding extends Book {
  constructor(lang, name) {
    super(name);
    this.language = lang;
  }
}

const book1 = new Book("Code by Satyam", 2024);
console.log(book1);
console.log(book1.setter(2025));

const codingBook = new Coding("Javascript", "Javascript by Satyam");

console.log(codingBook);

// Encapsulation means encapsulating all the properties and the methods

class Animal {
  constructor(species) {
    this.species = species;
  }
  makeSound() {
    return "The " + this.species + " makes a sound.";
  }
}

class Cat extends Animal {
  constructor(species) {
    super(species);
  }
  purr() {
    return "purr";
  }
}

class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  bark() {
    return "woff";
  }
}

function convertToRoman(num) {
  const obj = {
    0: ["M", 1000],
    1: ["D", 500],
    2: ["C", 100],
    3: ["L", 50],
    4: ["X", 10],
    5: ["V", 5],
    6: ["I", 1],
  };

  //your code here
  let roman = "";
  for (let key in obj) {
    while (num >= obj[key][1]) {
      roman += obj[key][0];
      num -= obj[key][1];
    }
  }
  return roman;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




class Rectangle{
    constructor(width,height){
        this._width = width
        this._height = height
    }

    get width(){
        return this._width
    }

    get height(){
        return this._height
    }

    getArea(){
        return this._height * this._width
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side,side)
        this.side = side
    }

    getPerimeter(){
        return this.side * 4
    }
}

const rectangle = new Rectangle(12,15)
console.log(rectangle.height)