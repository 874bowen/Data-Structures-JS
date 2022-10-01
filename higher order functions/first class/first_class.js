var passengers = [ 
     { name: "Jane Doloop", paid: true },
     { name: "Dr. Evel", paid: true },
     { name: "Sue Property", paid: false },
     { name: "John Funcall", paid: true } 
];
var noFlyList = [];
function onNoFlyList(name){
     for(var i = 0; i < noFlyList.length; i++){
          if (noFlyList[i].name == name) return true;
     }
     return false;
}

function checkPaid(passengers) {
     for (var i = 0; i < passengers.length; i++) {
          if (!passengers[i].paid) {
               noFlyList.push(passengers[i]);
               return false;
          }
     }
     return true;
}

function checkNoFly(passengers) {
     for (var i = 0; i < passengers.length; i++) {
          if (onNoFlyList(passengers[i].name)) {
               console.log(passengers[i].name);
               return false;
          }
     }
     return true;
}
function printPassengers(passengers) {
     for (var i = 0; i < passengers.length; i++) {
               console.log(passengers[i].name);
          }
     return true;
}
printPassengers(passengers)
// console.log(checkNoFly(passengers))
console.log(checkPaid(passengers))
console.log(noFlyList);
console.log(onNoFlyList("Sue Property"))
console.log(checkNoFly(passengers));

function first_function(logic, passengers){
     for (var i = 0; i < passengers.length; i++) {
          logic(passengers[i]);
          return false;
     }
     return true;
}
var no_fly_list = []
function print(passenger) {console.log(passenger.name);}
function check_paid(passenger) {
     return (!passenger.paid)
}
function check_no_fly(passenger){
     return (passenger.name === "Sue Property")
}

first_function(print, passengers);
console.log(" nsjil")
first_function(check_paid, passengers);
console.log(" nsjil")
console.log(first_function(check_no_fly, passengers));
