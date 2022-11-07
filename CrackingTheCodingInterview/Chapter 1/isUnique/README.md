### 📝 Problem Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? 

One solution is to create an objet of key - value pairs, where the object[str i] indicates whether character 
i in the alphabet is contained in the object if not it creates the key and assign 1 to it. The second time you see this character you can immediately 
return false. 

The time complexity for this code isO( n ), where n is the length of the string. The space complexity isO(l ). 

```javascript
for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] && obj[str[i]] >= 1) {
        return false;
    } else {
        obj[str[i]] = 1;
    }
}

```
We can reduce our space usage by a factor of eight by using a bit vector. We will assume, in the below code, 
that the string only uses the lowercase letters a through z. This will allow us to use just a single int. 

```javascript
 for(let index of [...str].map(c => c.charCodeAt() - indexOffset)) {
     const mask = 1 << index; // example: 1 << 0 = 1, 1 << 1 = 2
     if(counterTable & mask) // 0 & 1 = 0 => false  1 & 2 => false (01 & 10)
         return false;
     counterTable |= mask; // 0 | 1 = 1
     console.log("count " + counterTable + " mask " + mask + " index " + index);
 }
 return true;
```

```javascript
let a = 5; // 00000000000000000000000000000101

a <<= 2;   // 00000000000000000000000000010100

console.log(a);
// expected output: 20
```

``` javascript
let a = 5;      //  00000000000000000000000000000101

a >>= 2;        //  00000000000000000000000000000001
console.log(a);
// expected output: 1

let b = -5;     //  11111111111111111111111111111011

b >>= 2;        //  11111111111111111111111111111110
console.log(b);
// expected output: -2
```





When Number is called as a constructor (with new), it creates a Number object, which is not a primitive. For example, typeof new Number(42) === "object", and new Number(42) !== 42 (although new Number(42) == 42).

A primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.

``` 
let counterTable = Number(); 
let num = new Number("77");

console.log(num, num instanceof Number);
```

The `charCodeAt()`method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

```

console.log("a".charCodeAt());

```