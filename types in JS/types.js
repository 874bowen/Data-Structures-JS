/*
*undefined is the value assigned to things that don’t yet have a value
var x; //undefined
property that doesn’t exist/ deleted - undefined
dog.name -> does not exist then it is undefined
NULL in places where an object should be 
but one can’t be created or found, and it is most common to find 
UNDEFINED when you have a variable that hasn’t been initialized, or 
an object with a missing property, or an array with a missing value
*/

var test1 = "abcdef"; // string
var test2 = 123; // number
var test3 = true; // boolean
var test4 = {}; // object
var test5 = []; // object
var test6; // undefined
var test7 = {"abcdef": 123}; // object
var test8 = ["abcdef", 123]; // object
function test9(){return "abcdef"}; // function
var test10 = null;

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);
console.log(typeof test10);
