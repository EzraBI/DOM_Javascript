//--STRING METHODS--


const learning = 'Learning JavaScript is great!';
let output;

// length
output = learning.length ;

// concat
output = learning.concat(" ", " and fun");

// uppercase
output = learning.toUpperCase();

// lowercase
output = learning.toLowerCase();

// indexOf // indexof -1 doesn't exist
output = learning.indexOf('JavaScript');
output = learning.indexOf('PHP');

// substring()
output = learning.substring(0,10);
output = learning.substring(2,10);

// Substring from the end
output = learning.substring( learning.length - 4 );

// slice()
// negative number will start from the end
output = learning.slice(0,4);
output = learning.slice(-3);

// Split
output = learning.split(" ");

// Another wxample
const hobbies = 'read, walk, listen music, write, learn to program';
output = hobbies.split(", ");

// Replace.
output = learning.replace('JavaScript', 'Modern JavaScript');

// includes
output = learning.includes('JavaScript');
output = learning.includes('PHP');

// repeat
let greet =  "hello ";
    output = greet.repeat(3);

console.log(output);


//--NUMBERS IN JAVASCRIPT--
   

const number1 = 30;
const number2 = 20;
const number3 = 20.20;
const number4 = .10213;
const number5 = -3;

console.log(number1);

let result;

// addition
result = number1 + number2;
// substraction
result = number1 - number2;
// multiplication
result = number1 * number2;
// Division
result = number1 / number2;
// Modulos
result = number1 % number2;

// Pi
result = Math.PI;

// round
result = Math.round(2.5);

// round up or down (ceil or floor )
result = Math.ceil(2.2);
result = Math.floor(2.2);

// square root
result = Math.sqrt(144);

// absolute
result = Math.abs(-300);

// power
result = Math.pow(8, 3);

// get the minimum number from a list
result = Math.min(3,5,1,2,9,4,2, -3);

// get the max number from a list
result = Math.max(4,1,21,4,15,5,11,5);

// generate a random number
result = Math.random();

// Order of operations
result = 20 + 30 * 2;
result =  ( 20 + 30 ) * 2;


console.log(result);

// 20% Discount from a Shopping Cart
const cartItems = (20 + 20 + 30 + 40);
const discount = (cartItems / 100) * 20;
const totalPay = cartItems - discount;

console.log('Total: ' + cartItems)
console.log('Discount: ' + discount);
console.log('Pay: ' + totalPay);



// Increments or decrements
let score = 5;
score++;
score--;
++score;
--score;

score += 3;
score -= 3;

console.log(score);
    

//--DATA TYPES IN JAVASCRIPT--
   


// Javascript is a dinamically typed language
// You don't specify the data type
// the data type is defined by the value and not the variable

// The same variable can hold different data types and change
// while the program is executing

// In languages such as C, Java or C# you have to specify the data type

// In JavaScript you can add that functionality with TypeScript

// TypeOf operator is used to retrieve the data type

// In JavaScript a variable can change the data type

let name = 'Juan'
name = 20;
name = true;
name = undefined;
name = Symbol('Hello');
console.log(typeof name);

// Let's review the other data types
const name = "Juan";
console.log(typeof name );

// Numbers
let number;

number =  20;
console.log(typeof number );
number = "20";
console.log(typeof number );

// Boolean
let learningJS = true;
console.log(typeof learningJS );

// Null
// will return object
let bankSavings = null;
console.log(typeof bankSavings );

// Undefined
let person;
console.log(typeof person );

// Symbol (ES6)
let symbolES6 = Symbol('this is a symbol');
console.log(typeof symbolES6);

// Reference (Objetos)
// Arrays
let languages = ['HTML5', 'JS', 'PHP'];
console.log(typeof languages);

// Objects
let person = {
    name: 'Juan',
    city: 'mexico'
}
console.log(typeof person);

// Dates
let today = new Date();
console.log(typeof today);

    

//--COMPARISON OPERATORS--
   

console.log( 1 > 2);

console.log( 1 < 2);

// JavaScript can make comparisons between characters
console.log('a' < 'b');

console.log('a' > 'b' );

console.log('Z' < 'a');

// Equality Operator
console.log(2 == '2');

// Strict comparison Operator (This will check the typeof also)
console.log(2 === '2');


console.log( 2 == 3);

// Not Equals
console.log( 2 != 2);
console.log('hello' != ' hello');

// Comparison between null & undefined
console.log(null == undefined);
console.log(null === undefined);


    

//--CONVERT STRINGS TO NUMBERS--
   

let number1 = "50",
    number2 = 10,
    number3 = 'nine';


console.log(number1 + number2);

// Convert number1 to Number
console.log(Number(number1) + number2);
console.log(parseInt(number1) + number2);

// Convert number 3
console.log(number3);

// This will concatenate the value
console.log(number1 + number2);

// But this will substract the value
console.log(number1 - number2);

// Another Methods
let number = "20";
number = Number("20");
number = Number("20.20102");
number = Number(true);
number = Number(false);
number = Number(null);
number = Number("Hello world");
number = Number([1,2,3,4]);

console.log(number);
console.log(typeof number);

// ParseInt & ParseFloat

number = parseInt("100");
number = parseInt("100.20");
number = parseFloat("100.20");


// ToFixed just for numbers
let number1 = "1209139";
let number2 = 1209139.101213;
console.log(number1.toFixed(4) );
console.log(number2.toFixed(4) );

   

//--CONVERTING DATA TO STRING--
   

// Numbers to string

let number = 90210,
    output;

output = String(number);

// Anothers
dato = 4+4;
dato = "4" + "4";


console.log(output);
console.log(output.length);
console.log(typeof output);





// bool to string
output = true;
output = String(true);

// date to string
output = new Date();
output = String( new Date() );

// array to string
output = String( [1,2,3,4] );

// toString()

output = 20.toString() ;
output = true.toString() ;
output = [1,2,3,4].toString() ;

// null cannot be converted since it doesn't exist
output = null.toString() ;

    

//--TEMPLATE LITERALS--
   


const product1 = 'Pizza';
const price1 = 30;
const product2 = 'Hamburger';
const price2 = 40;

// Old Method
let html;
html  = '<ul>'+
        '<li>Item: ' + product1 + '</li>' +
        '<li>Price: $ ' + price1 + '</li>' +
        '<li>Item: ' + product2 + '</li>' +
        '<li>Price: $ ' + price2 + '</li>' +
        '<li>Total: $' + (price1 + price2) + '</li>';
        '</ul>';

// Template Strings

html = `
    <ul>
        <li>Item: ${product1}</li>
        <li>Price: ${price1}</li>
        <li>Item: ${product2}</li>
        <li>Price: ${price2}  </li>
        <li>Total: ${total(price1, price2)}</li>
    </ul>
`;

function total(param1, param2) {
    return param1 + param2;
}

// HTML to inject the code

let app = document.querySelector('#app');
app.innerHTML = html ;
    

//--ARRAYS--
   

// Array is a variable that can hold more than one value at the time
// Usually arrays hold related data.

// Creating an array
const numbers = [10,20,30,40,50];
console.log(numbers);

// Array of Months
const months = new Array('January', 'February', 'March', 'April', 'May', 'June');
console.log(months);

// Array with mixed values and data types!
const mixedArray = ["Hello", 10, true, "Yes", null];
console.log(mixedArray);

// Array methods
// Check the length in an array
console.log(months.length);

// Check if is an array
console.log(Array.isArray(months));

let name = 'Juan';
console.log(Array.isArray(name));

// Access any element in the array
console.log(months[0]);
console.log(months[3]);

// Change Values in the array
months[3] = 'December';
console.log(months);

// Find any element in the array
console.log(months.indexOf('December'));

// Add any element in the end of the array
months.push('Noviembre');

// Add element at the beginning of the array
months.unshift('Mes 0');

// Remove element from the end
months.pop();

// Remove element from the beggining
months.shift();

// Remove from specific position
// Splice takes 2 parameters, first one is the position,
// second one, how many elements you want to remove
months.splice(0,2);

// Reverse
months.reverse();
console.log(months);

// Concatenate two arrays in JavaScript
const array1 = [1,2,3];
const array2 = [9,8,7];
console.log(array1.concat(array2));

// order an array
let fruits = ['Banana', 'Apple', 'Strawberry', 'Orange', 'WaterMelon'];

fruits.sort();
console.log(fruits);

// Order numbers
const arrayNumbers = [1,3,100,4,6,7,3,2,14,67];

// Order from lower to greater
arrayNumbers.sort(function(x, y) {
    return x - y;
});

// Order from greater to lower
arrayNumbers.sort(function(x, y) {
    return y - x;
});

console.log(arrayNumbers);
    

//--JAVASCRIPT OBJECTS--
   

// In JavaScript an Object is similar to an array in a lot of ways
// Objects have properties attached to them
// THis properties are defined by you and you access them with a dot

// Create an Object

const person = {
    name: 'Juan',
    lastName: 'De la torre',
    job: 'Web Developer',
    email: 'mail@mail.com'
}

console.log(person);
console.log(person.name);
console.log(person.job);

// Another way but not really common
console.log( person[name] );

// An Object can hold any data type
const person = {
    name: 'Juan',
    lastName: 'De la torre',
    job: 'Web Developer',
    email: 'mail@mail.com'
    age : 20,
    favoriteMusic: ['Trance', 'Rock', 'Grunge'],
    living: {
        city: 'Guadalajara',
        country: 'Mexico'
    },
    birthYear: function() {
        return new Date().getFullYear() - this.age;
    }
}

// Access each element
console.log(person);
console.log(person.name);
console.log(person.favoriteMusic);
console.log(person.living);
console.log(person['living']['city']);

// An Object can contain also functions

birthYear: function() {
    return new Date().getFullYear() - this.age;
}

// Access the function
console.log( person.birthYear() );

// Array of Objects
let cars = [
    {model: 'Mustang', engine: 6.0},
    {model: 'Camaro', engine: 6.1},
    {model: 'Challenger', engine: 6.1},
];

// Iterate in the array of objects

for(let i = 0; i < cars.length; i++) {
    console.log(cars[i].model);
}
    

//--FUNCTIONS--
   


// Function Declaration
function helloVisitor() {
    console.log('Hello & Welcome ');
}
// A function must be called
helloVisitor();

// Passing Arguments to functions will make them more smart
function helloVisitor(firstName, lastName) {
    return `Hello ${firstName}  ${lastName} `;
}
console.log( helloVisitor('Pablo', 'De la torre') );

// Try without second argument
console.log( helloVisitor('Pablo') );

// Default parameters older way
function helloVisitor(firstName, lastName) {
    if(typeof firstName === 'undefined') {firstName = ''}
    if(typeof lastName === 'undefined') {lastName = ''}
    return `hello ${firstName}  ${lastName} `;
}
console.log( helloVisitor('Pablo', 'De la torre') );
console.log( helloVisitor('Pablo', ) );
console.log( helloVisitor() );


// Default Values new way
function helloVisitor(firstName = 'Juan' , lastName = 'de la torre') {
    return `Hello ${firstName}  ${lastName} `;
}
console.log( helloVisitor('Pablo', 'De la torre') );

// Function expressions
const sum = function(a = 5, b = 2) {
    return a + b;
};

console.log(sum(4, 8));
console.log(sum(14, 18));
console.log(sum(24, 28));
console.log(sum());


//  FUnctions that are invoked inmediately (IIFEs)
// immediately-invoked function expression

(function() {
    console.log('IIFES!!');
})();

// Passing arguments to functions

(function(technology) {
    console.log('Learning ' + technology);
})('JavaScript');

// Property Methods (a function inside an object is a method)

const musicPlayer = {
    play: function(id) {
        console.log(`Playing song with the ID: ${id}`);
    },
    pause: function() {
        console.log('paused....');
    }
}
musicPlayer.play(30);
musicPlayer.pause();


// Methods can be outside (but variable name should match)
musicPlayer.remove = function(id) {
    console.log(`Remove from my playlist: ${id}`)
}
musica.remove(20);


// Basically you can create your own functions, but remember
// JavaScript has  set of functions also.

console.log();
alert();
prompt();
confirm();
    

//--DATES IN JAVASCRIPT--
   

// Dates in JavaScript are objects so you have to create a new date.
const today = new Date();
let output;

console.log(today);

// Date MM-DAY-YEAR
let birthday = new Date('1-5-1987');

// Another way
birthday = new Date('January 5 1987');

output = today.getMonth();
output = today.getDate();
output = today.getDay();
output = today.getFullYear();
output = today.getMinutes();
output = today.getHours();
output = today.getTime();
output = today.getFullYear();
output = today.setFullYear(2018);

console.log(output);
    
    