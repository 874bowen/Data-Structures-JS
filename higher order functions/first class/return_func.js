var passengers = 
[ 
     { name: "Jane Doloop", paid: true, ticket: "coach" },
     { name: "Dr. Evel", paid: true, ticket: "firstclass" },
     { name: "Sue Property", paid: false, ticket: "firstclass" },
     { name: "John Funcall", paid: true, ticket: "coach" } 
]; 

function serveCustomer(passenger){
     var getDrinks = createDrinksOrder(passenger);
     getDrinks();
     var getDinner = getDinnerOrder(passenger);
     getDinner()
     // get drink order
     // get dinner order
     // pick up trash
}

function first_function(logic, passengers){
     for (var i = 0; i < passengers.length; i++) {
          logic(passengers[i]);
          // return false;
     }
     return true;
}

first_function(serveCustomer, passengers);

function createDrinksOrder(passenger) {
     if (passenger.ticket === "firstclass") {
          function orderDrinks(){
               console.log("Would you like a chicken or pasta?");
          }
     } else {
          function orderDrinks(){
               console.log("Your choice is cola or water.");
          }
     }
     return orderDrinks;
}
function getDinnerOrder(passenger) {
     var orderDinner;
     if (passenger.ticket === "firstclass") {
          orderDinner = function (){
               console.log("Would you like a cocktail or wine?");
          }
     } else if(passenger.ticket === "premium") {
          orderDinner = function (){
               console.log("Your choice is snack box or cheese plate.");
          }
     } else{
          orderDinner = function (){
               console.log("Your choice is peanuts or pretzels.");
          }
     }
     return orderDinner;
}