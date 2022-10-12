const canSum = (targetSum, numbers, memo={}) =>{
     if (targetSum in memo) return memo[targetSum];
     if (targetSum === 0) return true;
     if (targetSum < 0) return false;

     for(let number of numbers){
          let remainder = targetSum - number;
          if (canSum(remainder, numbers, memo)) return memo[targetSum] = true;
     }
     return memo[targetSum] = false;
}

console.log(canSum(7, [2, 3]))
console.log(canSum(7, [5, 3, 4, 7]))
console.log(canSum(7, [2, 4]))
console.log(canSum(8, [2, 3, 5]))
console.log(canSum(300, [7, 14]))