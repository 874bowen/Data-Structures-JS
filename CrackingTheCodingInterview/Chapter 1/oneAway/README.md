### 📝 One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away. 

#### Solution 
One solution with O ( n ) time is to use pointers and keep track of the number of characters which are not equal at the same index. When the number of counts exceed one we can return false.

```javascript
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
```