// ++ JavaScript let
// Allows you to declare a variable in block scope
var l = 10;
console.log(l); // Here l is 10
{
  let l = 2; // var l = 2;
  console.log(l);
}
console.log(l); // Here x is 10

// ++ JavaScript const
// Declaring constant values which cannot be changed
const c = 89;
console.log(c);
{
  const c = 10;
  console.log(c);
}
console.log(c);

// ++ JavaScript Arrow Functions
// ES5
var es5 = function(x, y) {
  return x * y;
};
console.log(es5(4, 5));

//ES6
const es6Cur = (x, y) => {
  return x * y;
};
console.log(es6Cur(4, 5));

const es6NCur = (x, y) => x * y; // omitting curly-braces returns automatically
console.log(es6NCur(4, 5));

// They don't have their own this, so not suited for defining object methods
// Arrow function not hoisted coz, they must be defined b4 they are used
// Using const than var is safe, coz function expression is always const
