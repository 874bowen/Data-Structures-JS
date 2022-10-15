class Node {
     constructor(val){
          this.val = val;
          this.next = null;
     }
}

let a = new Node(5);
let b = new Node(6);
let c = new Node(10);
let d = new Node(15);

a.next = b;
b.next = c;
c.next = d;

const add_items_iteratively = (head) => {
     let current = head;
     let total = 0;
     for ( ;current !== null; ){
          total += current.val;
          current = current.next;
     }
     return total;
}

console.log(add_items_iteratively(a));


const add_items_recursively = (head) => {
     if(head === null) return 0;
     return head.val + add_items_recursively(head.next);
}

console.log(add_items_recursively(a));