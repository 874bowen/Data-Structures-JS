// Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? 

// keep a hash map with counters 

// O(n) approach, additional data structures used
// for each character, check if its in the object
function eachCharUnique(str) {
   let obj = {};
   for (let i = 0; i < str.length; i++) {
     if (obj[str[i]] && obj[str[i]] >= 1) {
       return false;
     } else {
       obj[str[i]] = 1;
     }
   }
   return true;
 }
 
 /* TESTS */
 
console.log(eachCharUnique('abcd'), 'true');
console.log(eachCharUnique('abccd'), 'false');
console.log(eachCharUnique('bhjjb'), 'false');
console.log(eachCharUnique('mdjq'), 'true');
console.log(isUnique("abc"));

const uniqueChar = (str) => {
   let chat_set  = new Array();
   for (let i = 0; i < str.length; i++){
      if (chat_set[str[i]]) return false;
      chat_set[str[i]] = true
   }
   console.log(chat_set);
   return true
}

console.log(uniqueChar("abccc"));

var allUniqueChars = function(string) {
  
   // O(n^2) approach, no additional data structures used
   // for each character, check remaining characters for duplicates
   for (var i = 0; i < string.length; i++) {
     for (var j = i + 1; j < string.length; j++) {
       if (string[i] === string[j]) {
         return false; // if match, return false
       }
     }
   }
   return true; // if no match, return true
 };
 
 console.log(1 & 2);
 const everyCharUnique = (str, indexOffset = 'a'.charCodeAt()) => {
     let counterTable = Number(); // returns 0 , 1
     for(let index of [...str].map(c => c.charCodeAt() - indexOffset)) {
         const mask = 1 << index; // example: 1 << 0 = 1, 1 << 1 = 2
         if(counterTable & mask) // 0 & 1 = 0 => false  1 & 2 => false (01 & 10)
             return false;
         counterTable |= mask; // 0 | 1 = 1
     }
     return true;
 };
 
 console.log(everyCharUnique('abcd'), 'true');
 console.log(everyCharUnique('abccd'), 'false');
 console.log(everyCharUnique('bhjjb'), 'false');
 console.log(everyCharUnique('mdjq'), 'true');

// O(n) approach, additional data structures used
// for each character, check if its in the object
 function eachCharUnique(str) {
   let obj = {};
   for (let i = 0; i < str.length; i++) {
     if (obj[str[i]] && obj[str[i]] >= 1) {
       return false;
     } else {
       obj[str[i]] = 1;
     }
   }
   return true;
 }
 
 /* TESTS */
 
 console.log(eachCharUnique('abcd'), 'true');
 console.log(eachCharUnique('abccd'), 'false');
 console.log(eachCharUnique('bhjjb'), 'false');
 console.log(eachCharUnique('mdjq'), 'true');