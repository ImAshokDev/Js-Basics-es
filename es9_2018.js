// ASYNCHRONOUS ITERATION:

// for await(const line of readLines(filePath)) {
//     console.log(line)
// }

// REGULAR EXPRESSION IMPROVEMENTS:
// (A matched object can be returned by using regular expressions of JavaScript.
// A matched object has array-like value with matched strings. )

const reDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/,
  match = reDate.exec('2019-05-29'),
  year = match[1],
  month = match[2],
  day = match[3];
console.log(match);

// (A matched object can be returned by using regular expressions of JavaScript.
// A matched object has array-like value with matched strings.)

// REST/SPREAD PROPERTIES:
restParam(1, 2, 3, 4, 5);
function restParam(p1, p2, ...p3) {
  // p1=1
  // p2=2
  // p3=[3,4,5]
  console.log(p1);
  console.log(p2);
  console.log(p3);
}
//  The last arguments sent to a function are changed to an array using Rest parameters and the (...)
//  notation can be used only for array operations.

// PROMISE.PROTOTYPE.FINALLY():
// The method then() is called after successfully resolving the promise and catch() method is declared if a problem occurs.
//  Eventually, the code can be executed using finally() method irrespective of previous occurrences.
