'use strict';
// ++ "use strict" Directive
// for proper js and error reporting

var st;

st = 22; // v is not defined
console.log(st);

// ++ String.trim()

var tri = '   khrist yohan    ';
console.log(tri);

// ++ Array.isArray()
// checks if the object is an array

var arr = [3, 4, 5, 6];
var a = 3;
console.log(Array.isArray(arr)); //returns true
console.log(Array.isArray(a)); //returns false

// ++ Array.forEach()
// ForEach - executes the function for every element

arr.forEach(function(d) {
  console.log(d);
});

// ++ Array.map()
// Map - creates a new array by mapping every element

var b = arr.map(function(f) {
  return f * f;
});
console.log(b);

var sports = ['tennis', 'cricket', 'football', 'golf', 'running'];
var gg = sports.filter(function(h) {
  return h.length > 6;
});
console.log(gg);

// ++ Array.reduce()
// Reduce - creates a new array by reducing to a single element
var fg = arr.reduce(function(total, current) {
  console.log(current);
  return total + current;
});
console.log(fg); // same as iterating over to calculate the sum

// ++ Array.reduceRight()
// Same as above but from right to left
var fg = arr.reduceRight(function(total, current) {
  console.log(current);
  return total + current;
});
console.log(fg);

// ++ Array.every()
// Checks condition with every element, then returns true or false
// Even if one element in the array doesn't satisfy then if returns false
var jjj = arr.every(function(f) {
  return f < 10;
});
console.log(jjj);

// ++ Array.some()
// Checks condition to satisy with atleast one element
var lll = arr.some(function(f) {
  return f > 5;
});
console.log(lll);

// ++ Array.indexOf()
// Returns the index of first match in an array
// Not found returns -1
var iof = sports.indexOf('cricket');
console.log(iof);

// ++ Array.lastIndexOf()
// Same as above but checks and returns other end of an array
var lof = sports.lastIndexOf('football');
console.log(lof);

// ++ JSON.parse()
// parse a json string that is like an object
var jstring = '{"firstname": "khrist", "lastname": "yohan", "favnumber": 14}';
var obj = JSON.parse(jstring);
console.log(obj.firstname);
console.log(obj.lastname);

// ++ JSON.stringify()
// converts an object to a json string
var khj = JSON.stringify({ a: 3, y: 8 });
console.log(khj);
