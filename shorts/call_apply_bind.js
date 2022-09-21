let name1 = {
     fname: "Ivan",
     sname: "Bowen"
}

// when we have parameters arguments are passed second after the reference object
printFullName = function(hometown, state){
     console.log(this.fname+" "+ this.sname +" from " + hometown + ", " + state);
}

printFullName.call(name1, "Eldoret", "Kenya");

let name2 = {
     fname: "Ian",
     sname: "Kiprono", 
}
// function borrowing with call method => 
printFullName.call(name2, "Nairobi", "Kenya");

// apply method => for apply instead of passing the arguments individually you can pass an array of arguments not individually like call

printFullName.apply(name2, ["Nairobi", "Kenya"]);

