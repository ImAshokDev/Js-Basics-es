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
var z = myFunction(6, 4);
console.log(z);
// function which performs a calculation and returns the result

function myFunction(a, b) {
  return a + b;
}
