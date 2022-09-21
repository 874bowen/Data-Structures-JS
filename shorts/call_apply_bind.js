let name1 = {
     fname: "Ivan",
     sname: "Bowen"
}

printFullName = function(){
     console.log(this.fname+" "+ this.sname);
}

printFullName.call(name1);

let name2 = {
     fname: "Ian",
     sname: "Kiprono", 
}
// function borrowing
printFullName.call(name2);