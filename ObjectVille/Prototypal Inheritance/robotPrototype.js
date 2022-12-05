function Robot(name, year, owner) {
   this.name = name;
   this.year = year;
   this.owner = owner;
}
Robot.prototype.maker = "ObjectsRUs"
Robot.prototype.speak = () => {
   console.log(this.name + " speaks!");
}
Robot.prototype.makeCoffee = function () {
   console.log(this.name + " makes coffee!");
}
Robot.prototype.blinkLights = function () {
   console.log(this.name + " blinks light!");
}
let robby = new Robot("Robby", 1956, "Dr. Morbius");
let rosie = new Robot("Rosie", 1962, "George Jetson");
robby.onOffSwitch = true;
robby.makeCoffee = () => {
   console.log(robby.name + " goes to Starbucks for coffee");
}
rosie.cleanHouse = () => {
   console.log(rosie.name + " also cleans the house");
}
console.log(robby.name + " was made by " + robby.maker +
   " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee();
robby.blinkLights();
console.log(rosie.name + " was made by " + rosie.maker +
   " in " + rosie.year + " and is owned by " + rosie.owner);
rosie.cleanHouse();

function SpaceRobot(name, year, owner, homePlanet) {
   this.name = name;
   this.year = year;
   this.owner = owner;
   this.homePlanet = homePlanet;
}
SpaceRobot.prototype = new Robot;
SpaceRobot.prototype.speak = function () {
   console.log(this.name + " says Sir, If I may venture an opinion...");
};
SpaceRobot.prototype.pilot = function () {
   console.log(this.name + " says Thrusters? Are they important?");
};
var c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");
c3po.speak();
c3po.pilot();
console.log(c3po.name + " was made by " + c3po.maker);
var simon = new SpaceRobot("Simon", 2009, "Carla Diana", "Earth");
simon.makeCoffee();
simon.blinkLights();
simon.speak()