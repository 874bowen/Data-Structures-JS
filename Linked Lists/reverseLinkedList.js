class Node {
     constructor(val){
          this.val = val;
          this.next = null;
     }
}

let a = new Node("A");
let b = new Node("B");
let c = new Node("C");
let d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

// const reverse_linked_list_iteratively = (head) => {
//      let prev = null;
//      let current = head;

//      for ( ;current !== null; ){
//           const next = current.next;
//           current.next = prev;
//           prev = current;
//           current = next;
//      }
//      return prev;
// }
// console.log(reverse_linked_list_iteratively(a));

const reverse_linked_list_recursively = (head, prev, next) => {
     if (head === null) return prev;
     let nxt = head.next;
     head.next = prev;
     reverse_linked_list_recursively(nxt, head)
     return d; 
}
console.log(reverse_linked_list_recursively(a, null));