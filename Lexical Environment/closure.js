function makePassword(password) {
     return function (passwordGuess) {
          return (passwordGuess === password);
     };
}
var tryGuess = makePassword("secret");
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret"));

function multN(n) {
     return function (m) {
          return n*m;
     };
}
var multBy3 = multN(3);
console.log("Multiplying 2: " + multBy3(2));
console.log("Multiplying 3: " + multBy3(3));

function makeCount () {
     var count = 0;
     function counter(){
          count = count + 1;
          return count;
     }
     return counter;
}

var counter = makeCount();
console.log(counter());
console.log(counter());
console.log(counter());

function makeCounter () {
     var count = 0;
     return {
          increment: () => {
               count++;
               return count;
          }
     }
}

var counter = makeCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());