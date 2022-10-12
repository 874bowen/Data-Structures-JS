const canConstruct = (target, wordBank) => {
     if (target === "") return true;
     for(let word of wordBank){
          if(target.indexOf(word) === 0) {
               console.log(target.slice(word.length))
               if (canConstruct(target.slice(word.length), wordBank)) return true;
          }
     }
     return false;
}

let a = "abcdef";
console.log(a.slice(6));

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(null + 2);