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

function ShowDog (name, breed, weight, handler){
   this.name = name;
   this.breed = breed;
   this.weight = weight;
   this.handler = handler;
}

ShowDog.prototype = new Dog();

ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function () {
   console.log(this.name + " stacks");
}
ShowDog.prototype.bait = function () {
   console.log(this.name + " baits");
}
ShowDog.prototype.gait = function (kind) {
   console.log(this.name + " "+ kind + "ing");
}
ShowDog.prototype.groom = function () {
   console.log(this.name + " grooms");
}

const scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");

scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);