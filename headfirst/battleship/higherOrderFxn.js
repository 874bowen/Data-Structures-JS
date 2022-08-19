/* higher order functions are functions which take functions as arguments or return functions as return value */


// calculateArea
const radius = [3, 1, 2, 4];

const calculateArea = (radii) => {
    const output = [];
    for (let i = 0; i < radii.length; i++) {
        output.push(Math.PI * radii[i] * radii[i]);        
    }
    return output;
} 
console.log(calculateArea(radius));