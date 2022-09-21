let name = {
     fname: "Ivan",
     sname: "Bowen"
}
let printName = function(hometown, state){
     console.log(this.fname + " " + this.sname+", "+ hometown+", " + state);
}

let printMyName = printName.bind(name, "Kajiado");
printMyName("Kenya");


// implementation of bind 
// ...args is an array of arguments
Function.prototype.mybind = function (...args) {
     let obj = this;
     let params = args.slice(1);
     return function(...args2){
          obj.apply(args[0], [...params, ...args2])
          // concat arrays
     };
}

let printMyName2 = printName.mybind(name, "Kapsabet");
printMyName2("Kenya");

