/* higher order functions are functions which take functions as arguments or return functions as return value */


// STEPS IN WRITING HIGHER ORDER FUNCTIONS
// 1) Remove the code which is changing for our case the area, diameter and circumference calculations
// 2) Ensure there are no redundancies
// 3) Create a general function that takes the removed function as param

const area = (radius) => { return Math.PI * radius * radius; }

const circumference = (radius) => { return 2 * Math.PI * radius; }

const diameter = (radius) => { return 2 * radius; }

// calculate area
const radius = [3, 1, 2, 4];

// the general calculate fxn
// when you want the calculate function to be available to all your arrays use the Array.prototype
Array.prototype.calculate = function (logic) {
    console.log("This is: "+this);
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));        
    }
    return output;
}
console.log(radius.map(area));
console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));