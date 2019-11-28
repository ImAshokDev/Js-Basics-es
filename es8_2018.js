// PADsTART ():

let str = 'a3'; //  (This method pads a string with another string at the beginning.)
console.log(str.padStart(5, '#'));

// PENEND();
let one = 'Bat'; //(This method pads a string with another string and makes the resulting string reach a given length.
//It adds spaces at the end of the string.)
console.log(one.padEnd(8, '.'));

// SYNC/AWAIT:
// Await operator, applied only inside an async function, waits to be rejected or resolved by a promise.

//OBJECT.ENTRIES():
// It returns an array that contains the key-value pairs of a given object as an array.

const colors = { BL: 'Blue', OR: 'Orange', YE: 'Yellow', PI: 'Pink' };
Object.entries(colors); //[['BL','Blue'], ['OR','Orange'],['YE','Yellow'],['PI'.'Pink']]
//Output is not display properly

// SHARED MEMORY AND ATOMICS:
// (The same data can be read and written on multiple threads using the SharedArrayBuffer constructor.
// Interruption during the process of reading or writing can be avoided by using Atomic objects.
// This allows the previous operation to finish prior to the next one. )

//OBJECT.GETOWNPROPERTYDESCRIPTORS():
const person = { name: 'Tay' };
let propertyDesciptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(propertyDesciptor);
//(An object is returned to the own property descriptors with get, set, writeable, configurable and enumerable attributes. )

//OBJECT>VALUES();
const colors = { BL: 'Blue', OR: 'Orange', YE: 'Yellow', PI: 'Pink' };
Object.values(colors); //Output not display
