let array = [23, 67, 43, 6, 32, 5, 11]
console.log(array.sort(mySort))

function mySort(num1, num2){
     // sorting numbers can be  reduced to a single line of code 
     // i.e.,
     // return num1 - num2; 
     if (num1 > num2) return 1;
     if (num1 === num2) return 0;
     else return -1;
}

var products = 
[ 
     { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
     { name: "Orange", calories: 160, color: "orange", sold: 12101 },
     { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
     { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
     { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
     { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
     { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
     { name: "Water", calories: 0, color: "clear", sold: 62123 }
];
products.sort(sortBySales);
console.log("Products sorted by sales:");
console.log(products);

products.sort(sortByNames);
console.log("Products sorted by name:");
console.log(products);
products.sort(sortByCalories);
console.log("Products sorted by calories:");
console.log(products);
products.sort(sortByColor);
console.log("Products sorted by color:");
console.log(products);

function sortBySales(productA, productB){
     return productA.sold - productB.sold;
}
function sortByNames(productA, productB){
     if (productA.name > productB.name) return 1;
     if (productA.name === productB.name) return 0;
     else return -1;
}
function sortByCalories(productA, productB){
     return productA.calories - productB.calories;
}
function sortByColor(productA, productB){
     if (productA.color > productB.color) return 1;
     if (productA.color === productB.color) return 0;
     else return -1;
}