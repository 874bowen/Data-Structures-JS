const countConstruct = (target, wordBank, memo = {}) => {
     if (target in memo) return memo[target];
     if (target === "") return 1;
     let totalCount = 0;
     for (let word of wordBank){
          if(target.indexOf(word) === 0){
               let suffix = target.slice(word.length);
               let count = countConstruct(suffix, wordBank, memo);
               totalCount += count;
          }
     }
     return memo[target] = totalCount;
}

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
