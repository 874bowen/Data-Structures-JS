//Check Permutation: Given two strings, write a method to decide if one is a permutation of the other
// Solution 1: Sort and Compare
console.log("--------------------Solution 1 ---------------------");
const checkPerm = (str1, str2) => {
   if (str1.length !== str2.length) return false;
   str1 = str1.split("").sort((a, b) => b.charCodeAt() - a.charCodeAt()).join("");
   str2 = str2.split("").sort((a, b) => b.charCodeAt() - a.charCodeAt()).join("");
   return str1 === str2;
}

console.log(checkPerm("dog", "god"));
console.log(checkPerm("dig", "god"));
console.log(checkPerm("doog", "god"));

// Solution 2: Count and Compare
console.log("--------------------Solution 2 ---------------------");
const checkPermTwo = (str1, str2) => {
   if (str1.length !== str2.length) return false;
   let strOneCounter = {}
   for (let char of str1){
      if (strOneCounter[char]) strOneCounter[char] += 1;
      else strOneCounter[char] = 1;
   }
   
   let strTwoCounter = {}
   for (let char of str2){
      if (strTwoCounter[char]) strTwoCounter[char] += 1;
      else strTwoCounter[char] = 1;
   }

   for (let key in strOneCounter){
      if (strOneCounter[key] !== strTwoCounter[key]) return false;
   }
   return true;
}


console.log(checkPermTwo("dog", "god"))
console.log(checkPermTwo("dig", "god"))
console.log(checkPermTwo("doog", "god"))