const allConstruct = (target, wordBank, memo={}) =>{
     if (target in memo) return memo[target];
     if (target === "") return [[]];
     let result = [];
     for(let word of wordBank){
          if (target.indexOf(word) === 0){
               let suffix = target.slice(word.length);
               let suffixWays = allConstruct(suffix, wordBank, memo);
               // console.log([...suffixWays, word]);
               let targetWays = suffixWays.map(way => [word, ...way]);
               result.push(...targetWays)
          }
     }
     return memo[target] = result;
}

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz", ["a", "aaa", "aaaa", "aaaaa", "aaa"]));