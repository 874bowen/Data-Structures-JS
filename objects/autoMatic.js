// the reference object \_/ remote - uses pass by copy like variables but here
// sice it is a pointer it will point to the same object and change it value unlike variable
// if its passed by copy it doesnt change the variable
function makeCar() {
     var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
     var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
     var years = [1955, 1957, 1948, 1954, 1961];
     var colors = ["red", "blue", "tan", "yellow", "white"];
     var convertible = [true, false];
     var rand1 = Math.floor(Math.random() * makes.length);
     var rand2 = Math.floor(Math.random() * models.length);
     var rand3 = Math.floor(Math.random() * years.length);
     var rand4 = Math.floor(Math.random() * colors.length);
     var rand5 = Math.floor(Math.random() * 5) + 1;
     var rand6 = Math.floor(Math.random() * 2);
     var car = {
          make: makes[rand1],
          model: models[rand2],
          year: years[rand3],
          color: colors[rand4],
          passengers: rand5,
          convertible: convertible[rand6],
          mileage: 0,
          started: false,
          fuel: 0,
          start: function(){
               if (this.fuel > 0){
                    this.started = true;
               }
          },
          addFuel: function (amount) {
               this.fuel += amount;
          },
          stop: function(){this.started = false},
          drive: function() {
               if (this.started){
                    return "Zoom! Zooooom!";
               } else {
                    return "You need to start the engine first";
               }
          }
// Use this along with dot notation before each occurrence of the started property
// to tell the JavaScript interpreter you mean 
// the property of THIS very object, 
// rather than having JavaScript 
// think you're referring to a variable.
     };
     return car;
}
function displayCar(car) {
     console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
     car.start();
     console.log(car.drive());
     car.addFuel(50);
     console.log(car.fuel);
     car.stop();
     car.start();
     console.log(car.drive());
}
var carToSell = makeCar();
// for (prop in carToSell){
//      console.log(prop + ": "+ carToSell[prop]);
// }
displayCar(carToSell);