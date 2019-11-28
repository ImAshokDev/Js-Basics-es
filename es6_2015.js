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
