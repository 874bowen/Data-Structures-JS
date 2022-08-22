const arr = [5, 1, 3, 2, 6]

// filter is used to filter 😆
// what if you want to filter out all the values which are odd or even or > than x etc in that array

// check for odd numbers 
const output = arr.filter(x => x % 2);
console.log(output);
// check for even numbers
const even = arr.filter(x => x % 2 === 0);
console.log(even)
// greater than 4
const greaterThanFour = arr.filter(x => x > 4);
console.log(greaterThanFour);
// get indices with map
const indices = arr.map(x => arr.indexOf(x));
console.log(indices);