// ++ JavaScript let
// Allows you to declare a variable in block scope
var l = 10;
console.log(l); // Here l is 10
{
  let l = 2; // var l = 2;
  console.log(l);
}
console.log(l); // Here x is 10
