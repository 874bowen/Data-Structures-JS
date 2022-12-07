const stringRotate = (str1, str2, indexFound, Size) => {
   for (let i = 0; i < Size; i++){
      if (str1[i] !== str2[(indexFound + i) % Size]) return false;
   }
   return true;
}

let str1 = 'abacd';
let str2 = 'cdaba';

if (str1.length != str2.length) return false;
else{
   let indices = []; // store occurences of the first character of s1
   let Size = str1.length;
   let firstChar = str1[0];
   for (let i = 0; i < Size; i++){
      if (str2[i] == firstChar) indices.push(i);
   }
   console.log(indices);
   let isRotation = false;
   for (let idx of indices){
      isRotation = stringRotate(str1, str2, idx, Size);
      if (isRotation) break;
   }
   if (isRotation) console.log("Str2 is a rotation of Str1");
   else console.log("Str2 is not a rotation of Str1");
}

const checkRotatedStrings = (str, rotated) => {
   return str.length === rotated.length && rotated.repeat(2).includes(str);
}

// bottlewwaterbottlewwater <= includes 'wwaterbottle'
console.log("bottlewwater".repeat(2).includes("waterbottle"));
console.log(checkRotatedStrings("waterbottle", "bottlewwater"));