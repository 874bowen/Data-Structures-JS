const items = [
    { name: "Rice", price: 5 },
    { name: "Book", price: 20 },
    { name: "Chicken", price: 10 },
    { name: "Monitor", price: 100 }
]

// let totalPrice = 0;
// items.forEach(item => {
//     totalPrice += item.price
// });

const totalPrice = items.reduce((total, item) => {
    return total += item.price;
}, 0);
console.log(totalPrice);

const people = [
    { name: "Ivan", age: 26 },
    { name: "Francis", age: 31 },
    { name: "Max", age: 42 },
    { name: "Mia", age: 42 }
]

const result = people.reduce((groupedPeople, person) => {
    const age = person.age;
    if (groupedPeople[age] == null) groupedPeople[age] = [];
    groupedPeople[age].push(person);
    return groupedPeople;
}, {})

console.log(result);

// it takes 4 params
const numbers = [13, 2, 5, 4, 6]
const sum = numbers.reduce((total, number, index, array) =>{
    let i = 0;
    while (i< 3){
        total += number;
        i++;
    }
    console.log("This is "+ total);
    return total;
}, 0);

let d = 15;
let m = 3;
let total = [];
for (let i = 0; i < numbers.length-2; i++) {
    let tot = 0;
    for (let j = i; j < i+m; j++) {
        tot += numbers[j];
    }
    if (tot == d){ console.log("Found"); }
}
console.log("Total: ", total);
// console.log(number);
console.log(sum);

let answer = 0;
function getI() {
    answer = prompt("Enter number: ")
};
// while
// while (answer != 42) {
//     console.log(answer);
//     getI();
// }
// for
for( ;answer != 42; ){ getI(); }
