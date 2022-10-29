function Dog(name, breed, weight){
     this.name = name;
     this.breed = breed;
     this.weight = weight;
     this.bark = function(){
          if (this.weight > 25){
               console.log(this.name + " barks Woof!!");
          } else {
               console.log(this.name + " barks Yiff!!");
          }
     }
}

let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);
let fido = new Dog("Fido", "Mixed", 38);

let dogs = [fluffy, spot, fido];

for (let dog of dogs){
     let size = "small";
     if (dog.weight > 10){
          size = "large";
     }
     console.log("Dog: " + dog.name + " is a " + size + " " + dog.breed);
     dog.bark();
}