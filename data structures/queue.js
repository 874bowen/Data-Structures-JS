/*
Queue is a FIFO
variables: front, rear
functions: enqueue, dequeue, print, front, size, isEmpty 
 */

function Queue() {
    let collection = [];
    // print 
    this.print = () => { console.log(collection); }
    // enqueue
    this.enqueue = (value) => { collection.push(value); }
    // dequeue
    this.dequeue = () => {
        // collection.shift();
        for (let i = 0; i < collection.length; i++) {
            collection[i] = collection[i+1];
        }
    }
    // front
    this.front = () => { return collection[0]; }
    // size 
    this.size = () => { return collection.length; }
    // isEmpty
    this.isEmpty = () => { return (collection.length === 0); }
}

let myQueue = new Queue();
console.log("This queue is " + myQueue.isEmpty());
myQueue.print();
myQueue.enqueue(50);
myQueue.enqueue(60);
console.log(myQueue.size());
myQueue.print();
myQueue.enqueue(67);
myQueue.enqueue(979);
myQueue.dequeue();
console.log(myQueue.front());
