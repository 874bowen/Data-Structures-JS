class Node {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

let a = new Node("A");
let b = new Node("B");
let c = new Node("C");
let d = new Node("D");
let e = new Node("C")
let f = new Node("A")

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

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
console.log("-------------------Traverse Recursively-------------------------");
print_Recursive(a);

// remove duplicate


const removeDups = (head) => {
   let values = new Set();
   let list = new Node();
   let newList = list;
   let current = head;
   for ( ;current != null; ){
      if (!values.has(current.val)) {
         values.add(current.val);
         console.log("Values", values);
         console.log(current.val);
         let node = new Node(current.val);
         list.next = node;
      }
      if (list.next) list = list.next;
      current = current.next;
   }
   console.log("--**--**--------------------------**--**--");
   printValues(newList.next);
}

removeDups(a);

// without no buffer: use pointers 

const removeDups2 = (head) => {
   let current = head;
   for ( ;current != null; ){
      let next = current;
      for ( ;next.next != null; ){
         if (current.val === next.next.val) {
            next.next = next.next.next;
         } else {
            next = next.next;
         }
      }
      current = current.next;
   }
   console.log("--**--**--------------------------**--**--");
   printValues(head);
}

removeDups2(a);