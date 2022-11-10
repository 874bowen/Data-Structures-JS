#### Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words

##### Solution One
A palindrome is a string that is the same forwards and backwards. Therefore, to decide if a string is a permutation of a palindrome, we need to know if it can be written such that it's the same forwards and backwards. 
What does it take to be able to write a set of characters the same way forwards and backwards? We need to 
have an even number of almost all characters, so that half can be on one side and half can be on the other 
side. At most one character (the middle character) can have an odd count.

```javascript 
str = str.replaceAll(" ", "").toLowerCase(); // Race Car => racecar
```

The Time Complexity of this program is O ( n ) where `n` is the number of characters the string has excluding special characters e.g., spaces;

```javascript
for (let i = 0; i < str.length; i++){
   if (count[str[i]]) count[str[i]] += 1;
   else count[str[i]] = 1;
}
```

The Space Complexity is O ( n ) because of the new Object we are using to store the count

