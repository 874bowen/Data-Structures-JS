// sort of a group of name:  property value 
// Rules
// enclose object in curly braces
// separate the name and property value using a colon
// name can be string if has spaces enclose it with quotes
// you can not have two or more properties of same name
// separate each property name and value with a comma 
// Dont use comma after last property and name

var chevy = { 
     make: "Chevy",
     model: "Bel Air",
     year: 1957, 
     color: "red",
     passengers: 2,
     "is convertible": false, // if has space sorround with quotes
     mileage: 1021
};

// accessing the property values
var carMake = chevy.make;
console.log("Make is "+ carMake);
// modify the value
chevy.color = "Medium blue";
console.log("The color is " + chevy.color);
// add new color
chevy.owner = "Ivan"; // as long as name of property doesnt exist
console.log(chevy.owner);
// to delete a property: use the `delete` keyword. The delete expression returns true if the property was deleted successfully

delete chevy.passengers;
delete chevy.passengers;

console.log(chevy.passengers);
for ( ;chevy.passengers === undefined; ) {console.log("The passengers property was deleted!");
break;}
// create an object with no values
var lookMaNoProps = { };
 lookMaNoProps.age = 10;
 if (lookMaNoProps.age > 5) {
 lookMaNoProps.school = "Elementary";
 }