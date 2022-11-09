### 📝 Problem URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string 
has sufficient space at the end to hold the additional characters, and that you are given the "true" 
length of the string.

#### Solution One 
We can split the string into an array using `split(" ")` method this creates us an array with values without spaces. Simply we can use the `join("%20")` to join the array into a string where the values are separated by "%20".

```javascript
   str = str.split(" "); // ['Mr','John','Smith']
   str = str.join("%20") // 'Mr%20John%20Smith'
   return str;
```

The complexity of this is O ( n ) where n is the length of the resulting string.

#### Solution Two
We can split the str then use an empty string. Each time we encounter a new value when we loop through the array we add it to the new string together with the '%20'. When we get to the last element of the array we break out of the loop not adding '%20'.
Its time complexity is also O (n) and Space O (n)

```javascript
   result += str[i];
   if (i === str.length-1) break;
   result += "%20";
```