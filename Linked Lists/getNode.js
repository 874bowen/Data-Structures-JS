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

const get_node_at_index = (head, index) => {
     let current = head;
     let count = 0;
     for ( ;current !== null; ){
          if (count === index) return current;
          count++;
          current = current.next;
     }
     return null;
}

console.log(get_node_at_index(a, 2));

const get_node_at_index_recursively = (head, index) => {
     if (head === null) return null;
     if (index === 0) return head;
     return get_node_at_index_recursively(head.next, index-1);
}

console.log(get_node_at_index_recursively(a, 1));