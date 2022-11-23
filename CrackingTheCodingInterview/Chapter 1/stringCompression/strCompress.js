// String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z). 

const strCompress = (str) => {
   let compressed = [];
   let count = 1;
   for (let i = 1; i <= str.length; i++){
      if (str[i] !== str[i-1]) {
         compressed.push(str[i-1]);
         compressed.push(count);
         count = 1;
         continue;
      }
      count++;
   }
   return compressed.join("");
} 

// Test
console.log('aaaaaa', strCompress('aaaaaa'), 'a6');
console.log('aabcccccaaa', strCompress('aabcccccaaa'), 'a2b1c5a3');