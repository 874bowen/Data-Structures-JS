#####📝  String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z). 

###### Solution One
Our solution for this problem is to iterate through the string and if check adjacent equal values and keep a count of the values. 

We then use an array to store the value together with the count. This is because string concatenation lead to a time complexity of O ( n ^ 2).

On each concatenation, a new copy of the string is created, and the two strings are copied over, character 
by character. The first iteration requires us to copy x characters. The second iteration requires copying 2x characters. The third iteration requires 3x, and so on. The total time therefore is O( x + 2x + . . . + nx). 
This reduces toO(xn^2). 
>Why is it O(xn2)? Because1 + 2 + ... + n equals n(n+1)/2, or O(n^2). 

StringBuilder can help you avoid.this problem. StringBuilder simply creates a resizable array of all the strings, copying them back to a string only when necessary.

```javascript
compressed = [];
compressed.join(""); 
```

The `.join` method on an array return us a string with the values of the array.

