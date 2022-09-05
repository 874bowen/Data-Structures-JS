// shortest js program is an empty js file. When the browser sees it, the JS engine automatically creates a Global execution context. Besides, WINDOW is the global object created and a ""this"" keyword

// GEC created alongside with WINDOW and the `this`

var a = 10;
function b() {
     var x = 3;
}

console.log(window.a); // 20
console.log(a); // 10
console.log(x); // not defined
console.log(this.a); // 10