const bestSum = (targetSum, numbers, memo={}) => {
     if (targetSum in memo) return memo[targetSum]
     if (targetSum === 0) return [];
     if (targetSum < 0) return null;

     let shortest = null;
     for(let number of numbers){
          let remainder = targetSum - number;
          let result = bestSum(remainder, numbers, memo);
          
          if(result) {
               let combinations = [...result, number];
               if (shortest === null || combinations.length < shortest.length) shortest = combinations;
          }
     }

     return memo[targetSum] = shortest;
}

console.log(bestSum(7, [2, 3]))
console.log(bestSum(7, [5, 3, 4, 7]))
console.log(bestSum(7, [2, 4]))
console.log(bestSum(8, [2, 3, 5]))
console.log(bestSum(300, [7, 14]))