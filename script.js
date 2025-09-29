var a = "Yash"
var b = 123
var c = true
var d = undefined
var e = null

const cars = {
    company: "TATA Motors",
    car: "Nexon EV",
    price: "13,48,268",
    range: 489
}

const sym = Symbol(9)
let f = BigInt(26789728981987)

console.log(a);
console.log(typeof a);

console.log(b);
console.log(typeof b);

console.log(c);
console.log(typeof c);

console.log(d);
console.log(typeof d);

console.log(e);
console.log(typeof e);

console.log(car);
console.log(typeof car);

console.log(sym);
console.log(typeof sym);

console.log(f);
console.log(typeof f);


console.log(cars.company);
console.log(cars.car);
console.log(cars.price);


// Swap 2 numbers
let a = 10;
let b = 20;
console.log("Before Swap Value of a: " +a);
console.log("Before Swap Value of b: " +b);

a = a + b; 
b = a - b; 
a = a - b; 
console.log("After Swap Value of a: " +a);
console.log("After Swap Value of b: " +b);

// Even or Odd
let number = 4;

if (number % 2 === 0) {
    console.log(+ number + " is even.");
} else {
    console.log(+ number + " is odd.");
}


// Square of Number
let num;
function sqr(num){
    var result = num * num
    console.log("Square of " + num + " = " + result);
}
sqr(5);

// object of person with properties: name, age, city

const person = {
    name: "Yash",
    age: 23,
    city: "Nagpur",
    greet: function() {
        return "Hello, my name is " + person.name;    
    }

}

console.log("Name: " +person.name);
console.log("Age: " +person.age);
console.log("City: " +person.city);
console.log(person.greet());

person.greet() = "Hello, my name is {name}";

// car object with properties and methods (start, stop, drive). Call the methods

const car = {
    brand:"TATA Motors",
    model: "Nexon EV",
    year: 2024,

    start: function(){
        return "Start";
    },

    stop: function(){
        return "Stop";
    },

    drive: function(){
        return "Drive";
    }
}

console.log("Brand: " +car.brand);
console.log("Car: " +car.model);
console.log("Year: " +car.year);

console.log(car.start());
console.log(car.drive());
console.log(car.stop());















