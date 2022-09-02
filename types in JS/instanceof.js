function Duck(sound) {
     this.sound = sound;
     this.quack = function() {console.log(this.sound);}
}
var toy = new Duck("quack quack");
toy.quack(); // quack quack
console.log(typeof toy); // object 
console.log(toy instanceof Duck); // true