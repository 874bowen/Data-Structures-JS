let location1 = Math.floor(Math.random()*5);
let location2 = location1+1;
let location3 = location2+1;
let guess = null;
let guesses = 0;
let hits = 0;
let isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (should be between 0-6): ");
    if (guess > 6 || guess < 0){
        alert("Please enter value between 0 and 6");
    }
    else {
        guesses++;
        if(guess == location1 || guess == location2 || guess == location3){
            hits++;
            alert("HIT");
            if (hits == 3){
                isSunk = true;
                alert("You sank my Ship!");
            }
        } else { alert("MISS"); }
    }
}
var stats = "You took " + guesses + " guesses to sink the battlship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats); 