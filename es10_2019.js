// //Dynamic Import

// element.addEventListener('click',async()=>{
//     const module=await import ('./api-scripts/click.js');
//     module.clickEvent();
// });

//bigint

// const limit =Number.MAX_SAFE_INTEGER;
// //9007199254740991
// limit + 1;
// //9007199254740992
// limit + 2;
// //Still //9007199254740992 (exceeded MAX_SAFE_INTEGER + 1)
// const small = 1n; //1n
// const larger = 9007199254740991n; //9007199254740991n

// const integer = BigInt(9007199254740991); //init as number
// // 9007199254740991n

// const big = BigInt("9007199254740991"); //init as string
// // 9007199254740991n
// // big + 1;               // Cannot mix BigInt and other types, use explicit conversions
// // 9007199254740993n - exceed older numberic limit

//Array .prototype.sort()
var fruit = [
  { name: 'Apple', count: 13 },
  { name: 'Pear', count: 12 },
  { name: 'Strawberry', count: 11 },
  { name: 'Cherry', count: 11 },
  { name: 'Blackberry', count: 10 },
  { name: 'Pineapple', count: 10 }
];
// (Platform Sort)
//Create our own sort criteria function:
let my_sort = (a, b) => a.count - b.count;
//Perform stable ES110 sort:
let sorted = fruit.sort(my_sort);
console.log(sorted);

//Array.Flat()

let multi = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];
multi.flat(); //[1,2,3,4,5,6,Array(4)]
multi.flat().flat(); //[1,2,3,4,5,6,7,8,9,Array(3)]
multi
  .flat()
  .flat()
  .flat(); //[1,2,3,4,5,6,7,8,9,10,11,12]
multi.flat(Infinity); //[1,2,3,4,5,6,7,8,9,10,11,12]
console.log(multi.flat());
console.log(multi.flat().flat());
console.log(
  multi
    .flat()
    .flat()
    .flat()
);
console.log(multi.flat(Infinity));

//Array.flatMap()
let array = [1, 2, 3, 4, 5];
array.map(x => [x, x * 2]);
console.log(array.map(x => [x, x * 2]));

//String.prototype.matchAll()
let string = 'Hello';
let matches = string.match(/l/);
console.log(matches[0]); //"l"

//Regular Expressionn Capture Group
const pavi = 'black*raven lime*parrot white*seagull';
const regex = /(?<color>.*?)\*(?<bird>[a-z0-9]+)/g;
while ((match = regex.exec(pavi))) {
  let value = match[0];
  let index = match.index;
  let input = match.input;
  console.log(`${value} at ${index} with '${input}'`);
  console.log(match.groups.color);
  console.log(match.groups.bird);
}
