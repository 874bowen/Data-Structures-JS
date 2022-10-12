const howSum = (targetSum, numbers, memo={}) =>{
     if (targetSum in memo) return memo[targetSum];
     if (targetSum === 0) return [];
     if (targetSum < 0) return null;

     for(let number of numbers){
          let remainder = targetSum - number;
          let combinations = howSum(remainder, numbers, memo);
          // console.log(combinations);
          if (combinations) return memo[targetSum] = [...combinations, number];
     }
     return memo[targetSum] = null;
}

console.log(howSum(7, [2, 3]))
console.log(howSum(7, [5, 3, 4, 7]))
console.log(howSum(7, [2, 4]))
console.log(howSum(8, [2, 3, 5]))
console.log(howSum(300, [7, 14]))