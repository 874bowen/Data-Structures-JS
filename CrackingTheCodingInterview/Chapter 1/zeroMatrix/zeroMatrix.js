// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0. 

const zeroMatrix = (matrix) => {
   let rows = new Set();
   let columns = new Set();
   for (let i = 0; i < matrix.length; i++){
      for (let j = 0; j < matrix[0].length; j++){
         if (matrix[i][j] === 0){
            rows.add(i);
            columns.add(j);
         }
      }
   }
   for (let i = 0; i < matrix.length; i++){
      for (let j = 0; j < matrix[0].length; j++){
         if (rows.has(i) || columns.has(j)){
            matrix[i][j] = 0;
         }
      }
   }
   return matrix;
}
var testMatrix = [
   [1, 2, 3, 4],
   [0, 1, 2, 3],
   [5, 7, 1, 2],
   [1, 0, 6, 1]
   ];
   
console.log('before:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

zeroMatrix(testMatrix);

console.log('after:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);