function phraseOmatic() {
     let words1 =  ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
     let words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
     let words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

     let rand1 = Math.floor(Math.random() * words1.length);
     let rand2 = Math.floor(Math.random() * words2.length);
     let rand3 = Math.floor(Math.random() * words3.length);

     alert(words1[rand1] + " " +words2[rand2] + " " + words3[rand3]);
}
phraseOmatic();

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

let highest = 0;
// for (let i = 0; i < scores.length; i++) {
//      highest = scores[i] > highest ? highest = scores[i] : highest = highest;
//      console.log("Bubble solution #"+ i + " score: "+ scores[i]);
// }
function display(val) {
     console.log("Bubble solution #" + " score: "+ val);    
}
function getHighest(val){
     highest = val > highest ? highest = val : highest = highest;
     return highest;
}

function indicesHighest (val) { 
     let output = []
     if(val === highest){
          console.log("This value "+ val + " "+ scores.indexOf(val));
          output.push(scores.indexOf(val));
          console.log(output);
     }
     return output;
}

const overall = function (logic){
     let high = 0
     for (let i = 0; i < scores.length; i++) {
          high = logic(scores[i]);
     }
     return high;
}
console.log(overall(getHighest));
console.log(overall(display));
highest = overall(getHighest);
console.log(overall(indicesHighest));

console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: "+ highest);
console.log("Solutions with highest score: #"+scores.indexOf(highest));