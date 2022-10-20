class Node {
     constructor(val){
          this.val = val;
          this.left = null;
          this.right = null;
     }
}

class BST {
     constructor(){
          this.root = null;
     }
     insert = (data) => {
          let node = new Node(data);
          if (this.root === null) {
               this.root = node;
               // return;
          }
          else{
               let searchtree = (root) => {
                    if (data < root.val){
                         if (root.left === null) {
                              root.left = node;
                         }
                         else{
                              searchtree(root.left);
                         }
                    } else if (data > root.val){
                         if (root.right === null) {
                              root.right = node;
                         }
                         else{
                              searchtree(root.right);
                         }
                    }
               }
               return searchtree(this.root);
          }
     }
     
     inOrder = (root) => {
          if(root !== null){
               this.inOrder(root.left);
               console.log(root.val);
               this.inOrder(root.right);
          }
     }
}

let newBst = new BST();

newBst.insert(10);
newBst.insert(20);
newBst.insert(30);
newBst.insert(25);
newBst.insert(8);
newBst.insert(2);
newBst.insert(9);
newBst.insert(19);
newBst.inOrder(newBst.root);
console.log(newBst)