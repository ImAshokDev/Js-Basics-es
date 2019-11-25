// JavaScript Engine -> NodeJS

// ++ Statement || Programming Instructions

var x, y, z; // Statement 1
x = 5; // Statement 2
y = 4; // Statement 3
z = x + y; // Statement 4
console.log('The value of z is ' + z + '.');
// ; Separates statements

sa = 5;
sb = 6;
sc = sa + sb; // Multiple statements
console.log(sc);

var ws = 'CP'; //Ignores Multiple white spaces
// {} Code Block
function codeBlock() {
  console.log('Hello khrish');
}
codeBlock();

// Syntax
var x, y, z; // How to declare values
x = 5;
y = 6; // How to assign values
z = x + y; // How to compute values
console.log(z); // print value in command prompt

// ++ Variables || var creates variables
var price1 = 5;
var price2 = 2;
var sub = price1 - price2;
console.log('The sub value is: ' + sub);

// ++Case Sensitive
var lastName, lastname;
lastName = 'khrist';
lastname = 'yohan';
console.log(lastName + ' ' + lastname);

// ++ Operators
// substraction
var a = 4;
var b = 3;
var c = a - b;
//multiplication
var d = 5;
var e = 4;
var f = d * e;
//division
g = 10;
h = 2;
i = g / 2;
// Modulo
j = 10;
k = 4;
l = j % k;

console.log(c, f, i, l);

// arithmatic
a = 5;
b = 10;
x = ((10 - 5) * a) / b; // x = 2.5
console.log(x);
x = ((100 - 50) * a) / b; // x = 25
console.log(x);
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Division Remainder)
// ++	Increment
// --	Decrement

// Operators and Operands
// The numbers (in an arithmetic operation) are called operands.
// The operation (to be performed between the two operands) is defined by an operator.
// assignment

var a = 10;
b = 15;
a += 5; // a = a + 5;
b -= 5; // b = b - 5;
console.log(a, b);
// =    |	x = y   |	x = y
// +=	  | += y    |	x = x + y
// -=   |	x -= y	| x = x - y
// *=   |	x *= y	| x = x * y
// /=   |	x /= y	| x = x / y
// %=   |	x %= y	| x = x % y
// **=  |	x **= y	| x = x ** y

// ++ Data Type
// JavaScript evaluates expressions from left to right. Different sequences can produce different results
var num = 7;
var pi = 3.14;
var name = 'ashok';
var ans = 'yes i am';
var a = 12 + 4 + ' Volvo';
console.log(a);

// One Statement, Many Variables
var person = 'John Doe',
  carName = 'Volvo',
  price = 200;

// ++ Function
var z = Addition(6, 4);
console.log(z);
// function which performs a calculation and returns the result

function Addition(a, b) {
  return a + b;
}

// ++ Objects
// Create an object:
var car = {
  // car is object name
  type: 'Fiat',
  model: '500',
  color: 'white'
};

// Display some data from the object:
console.log(
  'The car type is: ' +
    car.type +
    ', car model is: ' +
    car.model +
    ', car color: ' +
    car.color
);

// ++ Events
function displayDate() {
  console.log(Date());
}

// ++ Strings
var carName1 = 'Volvo XC60'; // Double quotes
var carName2 = 'Volvo XC60'; // Single quotes
console.log(carName1 + ' ' + carName2); //Strings are written inside quotes. You can use single or double quotes

// ++ Strings Method
var txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(txt.length); //The length property returns the length of a string

// ++ String indexOf()
var str = "Please locate where 'locate' occurs!"; // indexof start with 0, 1, 2, 3, ......
var pos = str.indexOf('locate');
console.log(pos);
console.log('Departed Train'.indexOf('Train')); //ans=9

// ++ String lastIndexOf()
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf('locate');
console.log(pos);

// ++ String searching
var str = "Please locate where 'locate' occurs!";
var pos = str.search('locate');
console.log(pos);

// string slice()
var str = 'Apple, Banana, Kiwi';
var res = str.slice(7, 13);
console.log(res);

// substring()
var str = 'Apple, Banana, Kiwi';
var res = str.substring(7, 13);
console.log(res);

// string substr()
var str = 'Apple, Banana, Kiwi';
var res = str.substr(7, 6);
console.log(res);

// string replace
str = 'Please visit Microsoft!';
var n = str.replace('Microsoft', 'W3Schools');
console.log(n);

// string toUpperCase()
var text1 = 'Hello World!'; // String
var text2 = text1.toUpperCase(); // text2 is text1 converted to upper
console.log(text1, text2);

//string tolower case
var text1 = 'HELLO WORLD!'; // String
var text2 = text1.toLowerCase(); // text2 is text1 converted to lower
console.log(text2);

//string concat
var text1 = 'Hello';
var text2 = 'World';
var text3 = text1.concat(' ', text2);
console.log(text3);

//string.trim()
function myFunction() {
  var str = '     Hello World!     ';
  console.log(str.trim());
}
myFunction();

//string charAt()
var str = 'HELLO WORLD';
console.log(str.charAt(10));

// ++ Number
//Extra large or extra small numbers can be written with scientific (exponent) notation
var x = 123e5;
var y = 123e-5;
console.log(x + '    ' + y);

// ++ Numbers Method
var x = 9.656; //The toExponential() method returns a string, with the number rounded and written using exponential notation
console.log(
  x.toExponential() +
    ' ' +
    x.toExponential(2) +
    ' ' +
    x.toExponential(4) +
    ' ' +
    x.toExponential(6)
);

// ++ Array
cars = ['saab', 'Volvo', 'BMW']; //array elements are accessed using numeric indexes (starting from 0)
console.log(cars[0], cars[1]);
console.log(cars); // Full array

// ++ Array Methods
var fruits = ['banana', 'orange', 'apple', 'Mango'];
console.log(fruits.toString());

//++Array Sorts
function Fruits() {
  var fru = ['Banana', 'Orange', 'Apple', 'Mango'];
  console.log(fru);
  fru.sort(); //The sort() method sorts an array alphabetically
  console.log(fru);
}
Fruits(); //Fuction declared

// Array Iteration
// Calls a function once for each array element
var txt = '';
var numbers = [45, 4, 9, 16, 26];
numbers.forEach(myArray);
console.log(txt);

function myArray(value, index, array) {
  txt = txt + value + ' ';
}

// Dates
var d = new Date(2019, 09, 24, 10, 33, 30, 0); //Using new Date(7 numbers), creates a new date object with the specified date and time
console.log(d);

// Date Formates
var d = new Date('2015-03'); // ISO Dates
console.log(d);

// Date Get Method
var d = new Date(); //You can use an array to display the name of the month
var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
console.log(months[d.getMonth()]);

// ++ Date Set Method
var d = new Date(); //The setFullYear() method can optionally set month and day
d.setFullYear(2019, 09, 22);
console.log(d);

// Math
console.log(Math.PI);
console.log(Math.pow(8, 2));
console.log(Math.round(6.7));

// Random
console.log(Math.floor(Math.random() * 11)); //Math.floor(Math.random() * 11) returns a random integer between 0 and 10 (both included)

//Boolean
function BooleanFunc() {
  console.log(Boolean(10 > 9)); // display true or false
  console.log(Boolean(10 < 9)); // display true or false
}
BooleanFunc();

//Comparison
function CompFunc() {
  var age = 19,
    voteable;
  voteable = age < 18 ? 'Too young' : 'old enoungh';
  console.log(voteable + ' to vote.');
}
CompFunc();

// ++ Condition
// If Condition
if (new Date().getHours() < 18) {
  console.log('Good Day');
}

//Else Condition
function DateFun() {
  var hour = new Date().getHours();
  var greeting;
  if (hour < 2) {
    greeting = 'Good day';
  } else {
    greeting = 'Good morning';
  }
  console.log(greeting);
}
DateFun();

// Else if condition
function ElseIfFunc() {
  var greeting;
  var time = new Date().getHours();
  if (time < 10) {
    greeting = 'Good morning ';
  } else if (time < 15) {
    greeting = 'Good day';
  } else {
    greeting = 'Good evening';
  }
  console.log(greeting);
}
ElseIfFunc();

//Switch

var day; //Use the switch statement to select one of many code blocks to be executed.
switch (new Date().getDay()) {
  case 0:
    day = 'sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
}
console.log(' Today is : ' + day);

// Loop:

//for Loop
var cars = ['BMW', 'Volvo', 'saab', 'Ford'];
var text = '';
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + ' ';
}
console.log(text); //Loops are handy, if you want to run the same code over and over again, each time with a different value.

//for Loop Statement1
//Statement 1 is executed (one time) before the execution of the code block.
var text = '';
var i;
for (i = 0; i < cars.length; i++) {
  text += 'The number is ' + i + ' ';
  b;
}
console.log(text);

//Statement 2 defines the condition for executing the code block

//  (If you omit statement 2, you must provide a break inside the loop.
// Otherwise the loop will never end. This will crash your browser.)

//Statement 3 increases a value (i++) each time the code block in the loop has been executed.

var cars = ['bugatti', 'spyker', 'ferrari', 'lamborgani'];
var i = 0;
len = cars.length;
var text = '';

for (; i < len; ) {
  text += cars[i] + ' ';
  i++;
}
console.log(text);

// for-IN loop
var txt = ''; //The for/in statement loops through the properties of an object
var person = {
  fname: 'one',
  lname: 'two',
  age: 22
};
var x;
for (x in person) {
  txt += person[x] + ' ';
}
console.log(txt);

// for -Off loop(for over String)
var txt = ' one';
var x;
for (x of txt) {
  console.log(x + ' ');
}

//While Loop
var text = '';
var i = 0;
while (i < 3) {
  text += ' The number is: ' + i;
  i++;
}
console.log(text);

//do-while loop
var text = '';
var i = 0;
do {
  text += ' The number is: ' + i;
  i++;
} while (i < 5);
console.log(text);

//Comparing for VS while loop

// for
var cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
var i = 0;
var text = '';
for (; cars[i]; ) {
  text += cars[i] + '\n';
  i++;
}
console.log(text);

//while
var cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
var i = 0;
var text = '';
while (cars[i]) {
  text += cars[i] + '\n';
  i++;
}
console.log(text);

// Break and Continue

//Break Statement
var text = ''; //The break statement can also be used to jump out of a loop.
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += 'The number is: ' + i + '\n';
}
console.log(text);

//continue Statement
var text = ''; //The break statement breaks the loop and continues executing the code after the loop .
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += 'The number is: ' + i + '\n';
}
console.log(text);

//Types of conversion

//Number to String
var x = 123;
console.log(String(x) + ' ' + String(123) + ' ' + String(100 + 23));

// Automatic type Conversion
function addFunc() {
  var y = '5';
  var x = +y;
  console.log(typeof y + '\n' + typeof x);
}
addFunc();

//Bitewise

//Bitewise(AND)
console.log(5 & 1);

//Bitewise(OR)
console.log(5 | 1);

//Bitewise(XOR)
console.log(5 ^ 1);

//Bitewise(NOT)
console.log(~6);

// Bitwise Left Shift (<<)
console.log(5 << 1);

// Bitwise Right Shift (<<)
console.log(5 >> 1);

// Converting Decimal to Binary
console.log(dec2bin(5));

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
dec2bin();

// Converting Binary to Decimal
console.log(bin2dec(101));

function bin2dec(bin) {
  return parseInt(bin, 2).toString(10);
}
bin2dec();

//Regular Expressions
// Using String search() With a Regular Expression
var str = 'Visit W3Schools!';
var n = str.search(/w3Schools/i);
console.log(n);

//Error

//Range Error
var num = 1;
try {
  num.toPrecision(500);
} catch (err) {
  console.log(err.name);
}

//Reference Error
var x;
try {
  x = y + 2; // y cannot be referenced (used)
} catch (err) {
  console.log(err.name);
}

//Syntax Error
try {
  eval("alert('Hello)");
} catch (err) {
  console.log(err.name);
}

//Type Error
var num = 2;
try {
  num.toUpperCase();
} catch (err) {
  console.log(err.name);
}

//URI Error
try {
  decodeURI('%%%');
} catch (err) {
  console.log(err.name);
}

//Scope
//Local JavaScript Variables
function LocalVariable() {
  var carName = 'Volvo';
  console.log(typeof carName + ' ' + carName);
}
console.log(typeof carName);
LocalVariable();

// Global JavaScript Variables
var carName = 'Hyundai';
GlobalVariable();
function GlobalVariable() {
  console.log('i can Display ' + carName);
}

//Automatically global
myFAV();
// code here can use carName as a global variable
console.log('I can display: ' + carName);

function myFAV() {
  carName = 'ferrari';
}
myFAV();

//Hoisiting
var x = 5; // Initialize x   (In JavaScript, a variable can be declared after it has been used.)
var y = 7; // Initialize y
console.log(x + ' ' + y);

//Strc Mode
x = 3.14; // This will not cause an error
StrictFunc();

function StrictFunc() {
  'use strict';
  y = 3.14; // This will cause an error (y is not defined).
}

// this in method
// Create an object
var person = {
  fname: 'one',
  lname: 'two',
  id: 5566,
  fullName: function() {
    return this.fname + ' ' + this.lname + ' ' + this.id;
  }
};
// Display data from the object:
console.log(person.fullName());

// this is Function
console.log(javaFunc());
function javaFunc() {
  return this;
}

//Arrow Function
//Before:
var hello;

hello = function() {
  return 'Hello World!';
};
console.log(hello());

// With Arrow Function
var hello;

hello = () => {
  return 'Welcome!';
};
console.log(hello());

// Arrow function with parameter
var hello;
hello = val => 'hello' + val;
console.log(hello(' Universe'));

// Arrow function without Parentheses:

var hello;
hello = val => 'Hello ' + val;
console.log(hello('galaxy!'));

// Best Practice
// Never Declare Number, String, or Boolean Objects
var x = 'Jhon'; // x is a string
var y = new String('one'); // y is an object
console.log(x === y);

// Don't Use new Object()
var x1 = {};
var x2 = '';
var x3 = 0;
var x4 = false;
var x5 = [];
var x6 = /()/;
var x7 = function() {};

console.log(
  'x1: ' +
    typeof x1 +
    ' ' +
    'x2: ' +
    typeof x2 +
    ' ' +
    'x3: ' +
    typeof x3 +
    ' ' +
    'x4: ' +
    typeof x4 +
    ' ' +
    'x5: ' +
    typeof x5 +
    ' ' +
    'x6: ' +
    typeof x6 +
    ' ' +
    'x7: ' +
    typeof x7 +
    ' '
);

// Mistake
// Expecting Loose Comparison
var x = 10;
var y = '10';
console.log(x == y);

// Confusing Addition & Concatenation
var x = 10 + ' 5';
console.log(x);

// Misunderstanding Floats
var x = 0.1;
var y = 0.2;
var z = x + y;
console.log(z);

//JSON
var text =
  '{"employees":[' +
  '{"firstName":"John","lastName":"Doe" },' +
  '{"firstName":"Anna","lastName":"Smith" },' +
  '{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);
console.log(obj.employees[1].firstName + ' ' + obj.employees[1].lastName);
