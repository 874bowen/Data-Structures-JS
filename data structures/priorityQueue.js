/*
Queue is a FIFO
variables: front, rear
functions: enqueue, dequeue, print, front, size, isEmpty 
 */

function Queue() {
     collection = [];
     this.print = () => {
          console.log(collection);
     }
     this.enqueue = (val) => {
          if(this.isEmpty()){
               collection.push(val);
          } else {
               var added = false;
               for (let i = 0; i < collection.length; i++) {
                    if (val[1]  < collection[i][1]){
                         collection.splice(i, 0, val);
                         console.log("This is "+collection);
                         added = true;
                         break;
                    }
               }
               if (!added){
                    collection.push(val);
               }
          }
          return collection;
     }
     this.dequeue = () =>{
          for (let i = 0; i < collection.length; i++) {
               collection[i] = collection[i+1];  
          }
          collection.splice(collection.length-1);
          return collection;
     }
     this.front = () => {
          return collection[0];
     }
     this.size = () => {
          return collection.length;
     }
     this.isEmpty = () => {
          return (collection.length === 0);
     }
}
let myQueue = new Queue();
console.log("This queue is " + myQueue.isEmpty());
myQueue.print();
console.log(myQueue.enqueue([50, 2]));
console.log(myQueue.enqueue([60, 3]));
console.log(myQueue.size());
myQueue.print();
console.log(myQueue.enqueue([67, 1]));
console.log(myQueue.enqueue([979, 2]));
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
console.log(myQueue.front());