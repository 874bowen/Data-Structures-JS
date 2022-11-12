// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away. 

const oneAway = (str1, str2) => {
   let p1 = 0, p2 = 0, count = 0;
   let high = str2.length > str1.length ? str2.length : str1.length;
   for (let i = 0; i < high; i++){
      if (str1[p1] === str2[p2]) {
         p1++;
         p2++;
      } else {
         if (str1.length === str2.length) p1++;
         if (str1.length > str2.length) p1++;
         else p2++;
         count++;
         if (count > 1) return false
      }
   }

   return true;
}

console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);