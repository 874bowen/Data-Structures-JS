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

const highest = arr.reduce((high, curr) =>{ 
     high = curr > high ? high = curr : high = high; 
     return high;
}, 0);
console.log(highest);
 // get first name and last name
 const users = [
     {firstName: "Ian", lastName: "Bowen", age: 23},
     {firstName: "Ivan", lastName: "Bowen", age: 19},
     {firstName: "Idah", lastName: "Bowen", age: 15},
     {firstName: "Ivy", lastName: "Bowen", age: 15}
]

const userNames = users.map(x => x.firstName+" "+ x.lastName);
console.log(userNames);

// get the different ages
const ages = users.reduce((acc, curr) => {
     age = curr.age;
     acc[age] = acc[age] === undefined ? acc[age] = 1 : acc[age] += 1;
     return acc;
}, { });
console.log(ages);

let newObj = { };
newObj[16] = 2;
newObj[12] = 3;
json_string = JSON.stringify(newObj)
console.log(typeof newObj);
console.log("This is "+newObj["16"]);

for (let key in newObj){
     console.log(newObj[key]);
}

//first name of people whose age is less than 30
const agedBelow20 = users.filter(x => x.age < 20).map(p => p.firstName);
console.log(agedBelow20);

const below20 = users.reduce((acc, curr)=> {
     if (curr.age < 20 ){
          acc.push(curr.firstName);
     }
     return acc;
}, [])
console.log(below20);