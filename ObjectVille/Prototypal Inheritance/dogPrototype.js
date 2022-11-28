function Dog(name, breed, weight) {
   this.name = name;
   this.breed = breed;
   this.weight = weight;
}

Dog.prototype.species = "Canine";

Dog.prototype.bark = function () {
   if (this.weight > 25) {
      console.log(this.name + " says Woof!");
   } else {
      console.log(this.name + " says Yip!");
   }
};

//this always refers to the original object—that is, the object whose method was called—even if the method is in the prototype

Dog.prototype.run = function () {
   console.log(this.name + " Run!");
};
Dog.prototype.wag = function () {
   console.log(this.name + " Wag!");
};


let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);
// overriding the bark for spot

spot.bark = function () {
   console.log(this.name + " says WOOF!");
}
fido.bark();
fido.run();
fido.wag();
fluffy.bark();
fluffy.run();
fluffy.wag();
spot.bark();
spot.run();
spot.wag();

var barnaby = new Dog("Barnaby", "Basset Hound", 55);
Dog.prototype.sitting = false;
Dog.prototype.sit = function () {
   if (!this.sitting) {
      // When we first check to see if Spot has his own sitting property we get false.
      console.log("sitting " + this.hasOwnProperty("sitting"));
      console.log(this.name + " is now sitting");
      this.sitting = true;
      // Then we set spot.sitting to true, adding this property to the spot instance.

      console.log("sitting " + this.hasOwnProperty("sitting"));
   } else {console.log(this.name + " is already sitting");}
}
barnaby.sit();
barnaby.sit();
console.log(spot.hasOwnProperty("name"));
// But this call to hasOwnProperty returns false, because the fido instance does not have a sitting property. That means the sitting property that fido uses is defined only in the prototype, and inherited by fido
console.log(fido.hasOwnProperty("sitting"));