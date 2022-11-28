// Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

const rotate = (matrix) => {
   if (matrix.length == 0 || matrix.length != matrix[0].length) return false;
   let n = matrix.length; // 4
   for (let layer = 0; layer < n / 2; layer++) {
      let first = layer; 
      let last = n - 1 - layer;
      for (let i = first; i < last; i++) {
         let offset = i - first;

         let top = matrix[first][i]; // save top 
         // left -> top 
         matrix[first][i] = matrix[last - offset][first];
         // bottom -> left 
         matrix[last - offset][first] = matrix[last][last - offset];
         // right -> bottom  
         matrix[last][last - offset] = matrix[i][last];
         // top -> right
         matrix[i][last] = top; // right <- saved top 
      }
   }
   return true;

}
var testMatrix = [
   [1, 2, 3, 4],
   [0, 1, 2, 3],
   [0, 0, 1, 2],
   [1, 0, 0, 1]
   ];
   
console.log('before:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

rotate(testMatrix);

console.log('after:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);