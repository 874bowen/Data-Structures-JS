let name = {
     fname: "Ivan",
     sname: "Bowen",
     printFullName: function(){
          console.log(this.fname+" "+ this.sname);
     }
}

name.printFullName();
let name2 = {
     fname: "Ian",
     sname: "Kiprono", 
}
// function borrowing
name.printFullName.call(name2);