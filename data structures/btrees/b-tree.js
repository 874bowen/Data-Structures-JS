// node 
class Node{
     constructor(val){
          this.val = val;
          this.left = null;
          this.right = null;
     }
}

class BST{
     constructor(){
          this.root = null;
     }
     insert = (data) => {
          let node = new Node(data)
          if(this.root === null){
               this.root = node;
          } else{
               let searchtree = (root) =>{
                    if(data < root.val){
                         if (root.left === null){
                              root.left = node;
                         } else{
                              searchtree(root.left)
                         }
                    } else if (data > root.val){
                         if (root.right === null){
                              root.right = node;
                         } else{
                              searchtree(root.right)
                         }
                    }
               }
               return searchtree(this.root);
          }
     }
     inOrder = (root) => {
          if (root !== null){
               this.inOrder(root.left);
               console.log(root.val);
               this.inOrder(root.right);
          }
     }
     dfs = (root) => {
          if (root === null) return;
          let collection = [root]
          let result = [];
          while(collection.length > 0){
               let current = collection.pop()
               result.push(current.val);
               if (current.right) collection.push(current.right);
               if (current.left) collection.push(current.left);
          }
          console.log("result "+result);
     }
     dfs_recur = (root) => {
          if (root === null) return [];
          let leftValues = this.dfs_recur(root.left);
          let rightValues = this.dfs_recur(root.right);
          return [root.val, ...leftValues, ...rightValues];
     }
     bfs = (root) => {
          if (root === null) return [];
          let queue = [root];
          let result = []
          while (queue.length > 0){
               let current = queue.shift();
               result.push(current.val)
               if(current.left) queue.push(current.left);
               if(current.right) queue.push(current.right);
          }
          return result;
     }
     search_recur = (root, elem) => {
          if (root === null) return false;
          if (root.val === elem) return true;
          return this.search_recur(root.left, elem) || this.search_recur(root.right, elem)
     }
     search_bfs_iterative = (root, elem) => {
          if (root === null) return false;
          let queue = [ root ];
          while(queue.length > 0){
               let current = queue.shift();
               if (current.val === elem) return true;
               if (current.left) queue.push(current.left);
               if (current.right) queue.push(current.right);
          }
          return false;
     }
     search_dfs_iterative = (root, elem) => {
          if (root === null) return false;
          let stack = [ root ];
          while(stack.length > 0){
               let current = stack.pop();
               if (current.val === elem) return true;
               if (current.right) stack.push(current.right);
               if (current.left) stack.push(current.left);
          }
          return false;
     }
     total_recur = (root) => {
          if (root === null) return 0;
          return root.val + this.total_recur(root.left) + this.total_recur(root.right);
     }
     minimum_recur = (root) => {
          if (root === null) return Infinity;
          return Math.min(root.val, this.minimum_recur(root.left), this.minimum_recur(root.right))
     }
     max_root_to_leaf_path = (root) => {
          if (root === null) return -Infinity;
          if (root.left === null && root.right === null) return root.val;
          let max = Math.max(this.max_root_to_leaf_path(root.left), this.max_root_to_leaf_path(root.right));
          return max + root.val;
     }
     min_root_to_leaf_path = (root) => {
          if (root === null) return Infinity;
          if (root.left === null && root.right === null) return root.val;
          let min = Math.min(this.min_root_to_leaf_path(root.left), this.min_root_to_leaf_path(root.right))
          return root.val + min;
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
newBst.dfs(newBst.root);
console.log(newBst.dfs_recur(newBst.root));
console.log(newBst.bfs(newBst.root));
console.log("Searching Recursively ... ");
console.log(newBst.search_recur(newBst.root, 8));
console.log(newBst.search_recur(newBst.root, 767));
console.log("Searching Iteratively with BFS ... ");
console.log(newBst.search_bfs_iterative(newBst.root, 8));
console.log(newBst.search_bfs_iterative(newBst.root, 767));
console.log("Searching Iteratively with DFS ... ");
console.log(newBst.search_dfs_iterative(newBst.root, 8));
console.log(newBst.search_dfs_iterative(newBst.root, 767));
console.log("Totalling Recursively");
console.log(newBst.total_recur(newBst.root));
console.log("Getting minimum recursively");
console.log(newBst.minimum_recur(newBst.root));
console.log("Max path from root node to leaf");
console.log(newBst.max_root_to_leaf_path(newBst.root));
console.log("Min path from root node to leaf");
console.log(newBst.min_root_to_leaf_path(newBst.root));