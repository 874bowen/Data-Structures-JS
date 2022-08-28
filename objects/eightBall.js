// a method is a function that lives inside the body of an object like look() and shake()
var eightBall = {
     index: 0,
     advice: ["yes", "no", "maybe", "not a chance"],
     shake: function() {
          this.index += 1;
          if (this.index >= this.advice.length) this.index = 0; 
     },
     look:function() {
          return this.advice[this.index];
     }
};
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());