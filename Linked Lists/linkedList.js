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

// traverse linked list
const printValues = (head) => {
     let current = head;
     for( ;current !== null; ){
          console.log(current.val);
          current = current.next;
     }
}

printValues(a);

const print_Recursive = (head) => {
     if (head === null) return;
     console.log(head.val);
     print_Recursive(head.next);
}

print_Recursive(a);