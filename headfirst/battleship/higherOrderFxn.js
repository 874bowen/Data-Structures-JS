/* higher order functions are functions which take functions as arguments or return functions as return value */


// calculate area
const radius = [3, 1, 2, 4];

const calculateArea = (radii) => {
    const output = [];
    for (let i = 0; i < radii.length; i++) {
        output.push(Math.PI * radii[i] * radii[i]);        
    }
    return output;
} 
console.log(calculateArea(radius));

// calculate circumference 
const calculateCircumference = (radii) => {
    const output = [];
    for (let i = 0; i < radii.length; i++) {
        output.push(2 * Math.PI * radii[i]);        
    }
    return output;
} 
console.log(calculateCircumference(radius));

// calculate diameter 
const calculateDiameter = (radii) => {
    const output = [];
    for (let i = 0; i < radii.length; i++) {
        output.push(2 * radii[i]);        
    }
    return output;
} 
console.log(calculateDiameter(radius));