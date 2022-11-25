### 📝Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

We have a time complexity of O ( n^2 ) because we have to rotate the layers one by one. The space complexity will be O ( n ) for storing each row.

>How do we perform this four-way edge swap? One option is to copy the top edge to an array, and then move the left to the top, the bottom to the left, and so on. This requires O(N) memory, which is actually unnecessary. 

pattern observed:
- col value becomes row value
- row value is subtracted off edge and becomes col value

var edge = n - 1;

0100
0000
0000
0000

position of 1 -> m[0][1]

0000
0001
0000
0000

position of 1 -> m[1][edge]

0000
0000
0000
0010

position of 1 -> m[edge][edge - 1]

0000
0000
1000
0000

position of 1 -> m[edge-1][0]

0100
0000
0000
0000

position of 1 -> m[0][1]

flow of iteration:
- start from top left corner and move diagonally down
- for each row, iterate pixels until edge - 1 
(pixel at edge would have been transformed by the first pixel)
- at each pixel iteration, iterate through 4 sides
- do iteration in place, i.e. store a temp pixel for moving things around (not quite necessary)

##### Conclusion
We can perform a swap on each layer, starting from the outermost layer and working our way inwards. 

```javascript
for (let layer = 0; layer < n / 2; layer++) {
   let first = layer; 
   let last = n - 1 - layer;
   for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = matrix[first][i];
      ...
   }
}
```
Thus we have leveraged our complexity by removing the unnecessary time comlexity O ( n ). Our time complexity still remains O ( n ^ 2).