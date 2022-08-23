const arr = [5, 1, 3, 10, 2, 6]

// reduce does not reduce anything😆
// it is used when you have to take the whole array come with one or a SINGLE value out of them

// e.g., sum or max number

// non-functional way
function findSum(arr) {
     let sum = 0;
     for (let i = 0; i < arr.length; i++) {
          sum += arr[i];   
     }
     return sum;
}
console.log(findSum(arr));

// reduce runs accross each value
// current is the values i.e., arr[i]
// accumulator used to accumulate the values i.e., sum
// second argument to reduce is the initial value of the accumulator
const output = arr.reduce(function(acc, curr){
     acc += curr;
     return acc;
}, 0);
console.log(output);

