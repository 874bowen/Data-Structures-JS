### 📝 Problem Check Permutation: Given two strings, write a method to decide if one is a permutation of the other

#### Solution One
Two strings are permutations, then we know they have the same characters, but in different orders. Therefore, sorting the strings will put the characters from two permutations in the same order. We just need to compare the sorted versions of the strings. 

The time of complexity of this solution is not reliable as each time we will need to split, sort then join it back to a string

```javascript

   str1 = str1.split("").sort((a, b) => b.charCodeAt() - a.charCodeAt()).join("");

```

`.sort` method on arrays allows you to have two values next to each other and compare them and you will be able to choose if either it should sort in ascending or descending order. In our problem you could leave that part. Meaning this will also work.

```javascript

   str1 = str1.split("").sort().join("");

```

#### Solution Two 
We can also use the definition of a permutation-two words with the same character counts-to implement this algorithm. We simply iterate through this code, counting how many times each character appears. Then, afterwards, we compare the two objects.

The time complexity of this is O ( n ) where `n` is length of either the first string or the second string.
The space complexity of this is O ( 2n ) because of the two objects. This can be simplified to O ( n ).