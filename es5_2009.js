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

//Date now
var date = Date.now();
console.log(date);
var currentDate = new Date();
console.log(currentDate);

// ++ Property Getters and Setters
// Getting and Setting the values to the object
var person = {
  firstname: 'kheist',
  lastname: 'yohan',
  game: '',

  get fullname() {
    return this.firstname + ' ' + this.lastname;
  },
  set favGame(val) {
    this.game = val;
  }
};

console.log(person);
console.log(person.fullname);
console.log(person.game);
console.log((person.favGame = 'footvall'));
console.log(person);

// ++ New Object Property Methods
// Lets the user define the property of an object and/or change its value
// Object
var people = {
  firstName: 'khrist',
  lastName: 'yohan',
  favGame: ''
};
// Change a Property
Object.defineProperty(people, 'favGame', {
  value: 'FootBall',
  writable: true,
  enumerable: false,
  configurable: true
});
var txt = '';
for (var x in people) {
  txt += people[x] + '\n';
}
console.log(txt);
// We are setting, but can't be changed
people.favGame = 'cricket';
console.log(people);

// var pplarr = {
//     firstName: "chaal",
//     lastName: "pritam",
//     mygame: "NO"
// };
// Object.defineProperty(pplarr, "mygame", {
//     get : function() {
//         return mygame;
//     },
//     set : function(value) {
//         mygame = value;
//     }
// });
// // Change Fav Game
// pplarr.mygame = "FootBall";
// console.log(pplarr.mygame);

// ++ Adding or changing an object property
// Object.defineProperty(object, property, descriptor)

// ++ Adding or changing many object properties
// Object.defineProperties(object, descriptors)

// ++ Accessing Properties
// Object.getOwnPropertyDescriptor(object, property)

// ++ Returns all properties as an array
// Object.getOwnPropertyNames(object)

// ++ Returns enumerable properties as an array
// Object.keys(object)

// ++ Accessing the prototype
// Object.getPrototypeOf(object)

// ++ Prevents adding properties to an object
// Object.preventExtensions(object)

// ++ Returns true if properties can be added to an object
// Object.isExtensible(object)

// ++ Prevents changes of object properties (not values)
// Object.seal(object)

// ++ Returns true if object is sealed
// Object.isSealed(object)

// ++ Prevents any changes to an object
// Object.freeze(object)

// ++ Returns true if object is frozen
// Object.isFrozen(object)

// Syntactical Change
// ++ Property access [ ] on strings
var stracc = 'Hello khrish';
console.log(stracc.charAt(0));
console.log(stracc[0]);
