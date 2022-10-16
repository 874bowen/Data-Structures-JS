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

let h = new Node("H");
let i = new Node("I");
let j = new Node("J");

h.next = i;
i.next = j;

const alternateLists = (head1, head2) => {
     let tail = head1;
     let current1 = head1.next;
     let current2 = head2;
     let count = 0;
     for ( ;current2 !== null && current1 !== null; ){
          if (count % 2 === 0){
               tail.next = current2;
               current2 = current2.next;
          } else {
               tail.next = current1;
               current1 = current1.next;
          }
          count++;
          tail = tail.next;
     }
     if (current1 !== null) tail.next = current1;
     if (current2 !== null) tail.next = current2;
     return head1;     
}

console.log(alternateLists(a, h));

const alternate_lists_recursively = (head1, head2) => {
     if (!head1 && !head2) return null;
     if (!head1) return head2;
     if (!head2) return head1;
     let next1 = head1.next;
     let next2 = head2.next;
     head1.next = head2;
     head2.next = alternate_lists_recursively(next1, next2)
     return head1;
}

console.log(alternate_lists_recursively(a, h));