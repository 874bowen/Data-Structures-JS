const bestSum = (targetSum, numbers) => {
     let table = Array(targetSum+1).fill(null);
     table[0] = [];
     for(let i = 0; i <= targetSum; i++){
          if (table[i] !== null){
               for (let number of numbers){
                    let combinations = [...table[i], number];
                    if(!table[i + number] || combinations.length < table[i+number].length) table[i+number] = combinations;
               }
          }
     }
     return table[targetSum];
}

console.log(bestSum(7, [2, 3]))
console.log(bestSum(7, [5, 3, 4, 7]))
console.log(bestSum(7, [2, 4]))
console.log(bestSum(8, [2, 3, 5]))
console.log(bestSum(8, [1, 4, 5]))
console.log(bestSum(100, [1, 2, 5, 25]))
console.log(bestSum(300, [7, 14]))