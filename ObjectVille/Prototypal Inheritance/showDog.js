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

Dog.prototype.run = function () {
   console.log(this.name + " Run!");
};
Dog.prototype.wag = function () {
   console.log(this.name + " Wag!");
};

// Remember, the ShowDog constructor looks a lot like the Dog constructor. A show dog needs a name, breed, weight, plus one extra property, a handler (the person who handles the show dog). These will end up being defined in the show dog instance.

function ShowDog(name, breed, weight, handler) {
   // We use the call method instead of just calling Dog directly so we can control what the value of this is.
   // calling the Dog constructor function but telling it to use our ShowDog instance as this
   Dog.call(this, name, breed, weight);
   this.handler = handler;
}

ShowDog.prototype = new Dog();

ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function () {
   console.log(this.name + " stacks");
}
ShowDog.prototype.bait = function () {
   console.log(this.name + " baits");
}
ShowDog.prototype.gait = function (kind) {
   console.log(this.name + " " + kind + "ing");
}
ShowDog.prototype.groom = function () {
   console.log(this.name + " grooms");
}
ShowDog.prototype.toString = function () {
   return this.name + " is a " + this.breed + " breed and weighs " + this.weight + " kgs" ;
}

const scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");

scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);

var fido = new Dog("Fido", "Mixed", 38);
if (fido instanceof Dog) {
   console.log("Fido is a Dog");
}
if (fido instanceof ShowDog) {
   console.log("Fido is a ShowDog");
}
//  instanceof doesn’t just look at what kind of object you are, it also takes into account all the objects you inherit from
if (scotty instanceof Dog) {
   console.log("Scotty is a Dog");
}
if (scotty instanceof ShowDog) {
   console.log("Scotty is a ShowDog");
}
console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);
console.log(scotty.toString());
console.log("Scotty is: " , scotty);
// you use the + operator to concatenate a string and an object, JavaScript will use the toString method to convert your object to a string before concatenating it with the other string.
console.log("Scotty is: " + scotty);