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

var header = document.getElementById("ivan");
console.log(header);
if (header == null){
     document.createElement("h1");
     
}
var to_be_assigned_later = null;
console.log(typeof to_be_assigned_later);
// We intend to assign an object to this variable at some point, but we 
// haven’t yet.

let infinity = 10/0;
console.log(infinity);
console.log(typeof infinity);
console.log("Math " * 1000);
console.log(Math.sqrt(-9));
infinity = isNaN(infinity) ? 9 : "Is not NaN";
console.log(infinity);
if (99 == "99") {
     console.log("A number equals a string!");
} else {
     console.log("No way a number equals a string");
}

var testThis;
if (testThis) {
 // do something
}
var element = document.getElementById("elementThatDoesntExist");
if (element) {
 // do something
 console.log("Element doesn't exist");
}
if (0) {
 // do another thing
 console.log("This is zero");
}
if ("") {
 // does code here ever get evaluated? Place your bets.
 console.log("This is empty string");
}
console.log("Nothing did happen");
if (NaN) {
 // Hmm, what's NaN doing in a boolean test?
 console.log("This is NaN");
}