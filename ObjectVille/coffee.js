function Coffee (roasts, ounces){ 
     this.roasts = roasts;
     this.ounces = ounces;
     this.getSize = function(){
          let size = "small";
          if (this.ounces >= 16) size = "large";
          else if (this.ounces >= 8 ) size = "medium";
          return size;
     }
     this.toString = function(){
          let size = this.getSize();
          return "You've ordered a " + size + " " + this.roasts +".";
     }
}
let houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());
let darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());
// You've ordered a medium House 
// Blend coffee.
// You've ordered a large Dark 
// Roast coffee.