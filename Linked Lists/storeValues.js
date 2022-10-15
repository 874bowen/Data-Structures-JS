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

const store_values_iteratively = (head) => {
     let current = head;
     let array_of_values = [];
     for ( ;current !== null; ){
          array_of_values.push(current.val);
          current = current.next;
     }
     return array_of_values;
}

console.log(store_values_iteratively(a));

const store_values_recursively = (head) => {
     let array_of_values = [];
     return fill_values(head, array_of_values);
}

const fill_values = (head, array_of_values) => {
     if (head === null) return;
     array_of_values.push(head.val);
     fill_values(head.next, array_of_values);
     return array_of_values;
}

console.log(store_values_recursively(a));

const check = (head, target) => {
     if (head === null) return false;
     if (head.val === target) return true;
     return check(head.next, target);
}

console.log(check(a, "A"));