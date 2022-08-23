var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];


// print and get highest scores
function printAndGetHighest(scores) {
     let highest = 0;
     for (let i = 0; i < scores.length; i++) {
         console.log("Bubble solution #"+ i + " score: "+ scores[i]);
         highest = scores[i] > highest ? highest = scores[i] : highest = highest;     
     }
     return highest;
}

// get all highest
function getAllHighest(scores, highest) {
     let allHigh = [];
     for (let i = 0; i < scores.length; i++) {
          if(scores[i] === highest) allHigh.push(i);          
     }
     return allHigh;
}

// get most cost effective soln from the highest
function getMostCostEffective(scores, cost, highest) {
     let costEffective = 100;
     let index = 0;
     for (let i = 0; i < scores.length; i++) {
          if(scores[i] === highest){
               if(cost[i] < costEffective){ 
                    costEffective = cost[i];
                    index = i;
               }
          }          
     }
     return index;
}

highest = printAndGetHighest(scores);
printAndGetHighest(scores);
console.log("The highest solution is "+ highest);
console.log("The indices include: "+ getAllHighest(scores, highest));
let cost = getMostCostEffective(scores, costs, highest);
console.log(cost);