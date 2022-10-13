const targetSum = (target, nums, memo={}) => {
     if (target < 0) return false;
     if (target in memo) return memo[target];
     if (target === 0) return true;
     for(let num of nums){
          let remaider = target - num;
          if (targetSum(remaider, nums, memo)) return memo[target] = true;
     }
     return memo[target] = false;
}

console.log(targetSum(7, [2, 3]))
console.log(targetSum(7, [5, 3, 4, 7]))
console.log(targetSum(7, [2, 4]))
console.log(targetSum(8, [2, 3, 5]))
console.log(targetSum(300, [7, 14]))
