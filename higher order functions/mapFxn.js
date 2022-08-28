const arr = [5, 1, 3, 2, 6];

// map is used when you want to transform the whole array
// map each value to another then returned

// Double - [10, 2, 6, 4, 12]

// Triple - [12, 3, 9, 6, 18]

// Binary - ["101", "1", "11", "10", "110"]

function double (val){
     return 2 * val;
}
function triple (val){
     return 3 * val; 
}
function toBinary(val){
     return val.toString(2);
}
// if code is one line you can leave the return  
console.log(arr.map(x => x/2));

console.log(arr.map(x => {
     return x * 2; // with arrow function
}));
console.log(arr.map(function triple (val){
     return 3 * val; // just the function
}));
console.log(arr.map(toBinary));