class Node {
     constructor (data, left=null, right=null){
          this.data = data;
          this.left = left;
          this.right = right;
     }
}

class BST {
     constructor(){
          this.root = null;
     }
     add(data){
          const node = this.root;
          if (node === null){
               this.root = new Node(data);
               return;
          } else {
               const searchTree = function(node){
                    if (data < node.data){
                         if(node.left === null){
                              node.left = new Node(data);
                               return;
                         } else if(node.left !== null){
                              return searchTree(node.left);
                         }
                    } else if( data > node.data){
                         if (node.right === null){
                              node.right = new Node(data);
                              return;
                         } else if (node.right !== null){
                              return searchTree(node.right);
                         }
                    } else{
                         return null;
                    }
               };
               return searchTree(node);
          }
     }
     findMin(){
          let current = this.root;
          for( ;current.left !== null; ){
               current = current.left;
          }
          return current.data;
     }
     findMax(){
          let current = this.root;
          for ( ;current.right !== null; ){
               current = current.right;
          }
          return current.data;
     }
     find(data){
          let current = this.root;
          for ( ;current.data !== data; ){
               if (data < current.data){
                    current = current.left;
               } else if (data > current.data){
                    current = current.right;
               } 
               if (current === null){
                    return null
               }
          }
          return current;
     }
     isPresent(data){
          let current = this.root;
          for( ;current; ){
               if (current.data === data){
                    return true
               }
               if (data < current.data){
                    current = current.left;
               } else {
                    current = current.right;
               }
          }
          return false;
     }
}

let newBst = new BST();

newBst.add(10);
newBst.add(20);
newBst.add(30);
newBst.add(25);
newBst.add(19);

console.log(newBst.isPresent(20));
console.log(newBst.findMax());
console.log(newBst.findMin());

function solution(blocks) {
     // write your code in JavaScript (Node.js 8.9.4)
     let maximumRange = 0;
     if (blocks == null || blocks.length <= 1){
         return maximumRange;
     }
     let node = blocks.length;
     let left = new Array(node);
     let right = new Array(node);
 
     left[0] = 0;
     for(let index =1; index< node; index++){
         if(blocks[index] <= blocks[index-1]){
             left[index] = left[index-1] + 1;
         } else {
             left[index] = 0;
         }
     }
     right[node-1]=0;
     for(let index =node-2; index>=0; index--){
         if(blocks[index] <= blocks[index+1]){
             right[index] = right[index+1] + 1;
         } else {
             right[index] = 0;
         }
     }
     for (let index = 0; index < node; index++){
         maximumRange = Math.max(maximumRange, left[index] + right[index] +1);
     }
     return maximumRange;
 }