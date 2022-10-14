const allConstruct = (target, wordBank) => {
     let table = Array(target.length + 1).fill().map(() => []);
     table[0][0] = [[]];
     for (let i = 0; i <= target.length; i++){
          for(let word of wordBank){
               if(target.slice(i, i + word.length) === word){
                    let combinations = table[i].map(subArray => [...subArray, word]);
                    table[i + word.length].push(...combinations);
               }
          }
     }
     return table[target.length];
}

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log(allConstruct("enterapotent", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
[
     "e",
     "ee",
     "eee", 
     "eeee", 
     "eeeee",
     "eeeeee"
])); // false