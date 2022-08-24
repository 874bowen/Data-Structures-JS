// Variables don’t actually hold objects cause objects are too big to fit \_/.
// Primitive variables like string, number ans bool are stored inside a var
// Instead they hold a reference to an object.
// The reference is like a pointer or an address to the 
// actual object.
// In other words, a variable doesn’t hold the object 
// itself, but it holds something like a pointer. And, in 
// JavaScript we don’t really know what is inside a 
// reference variable. We do know that whatever it is, it 
// points to our object. 
// car.color => “use the object referenced by the variable car to access the color property.”

var taxi = { 
     make: "Webville Motors",
     model: "Taxi",
     year: 1955,
     color: "yellow",
     passengers: 4,
     convertible: false,
     mileage: 281341
};
// create the prequal fxn
function prequal(car) {
     return car.year > 1960 || car.mileage > 10000 ? false : true;
}

var worthIt = prequal(taxi);

if (worthIt){
     console.log("You can check out "+ taxi.make);
} else{ 
     console.log("You can just pass "+ taxi.make);
}