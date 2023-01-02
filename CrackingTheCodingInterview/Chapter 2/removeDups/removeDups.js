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
   values.add(head.val);
   let newList = new Node(head.val);
   let current = head.next
   for ( ;current != null; ){
      console.log("well "+ current.val);
      if(values.has(current.val)) break;
      else {
         values.add(current.val);
         console.log("Values", values);
         let node = new Node(current.val);
         // newList.next = node;
         // // newList = node;
         let curr = head;
         while (curr.next){
            curr = curr.next;
         }
         curr.next = node;
      }
      current = current.next;
   }
   console.log("--**--**--------------------------**--**--");
   printValues(newList);
}

removeDups(a);