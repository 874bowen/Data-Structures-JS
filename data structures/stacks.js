/* Stacks uses array and has three functions: push, pop, peek and size */


class Stack {
    constructor() {
        this.count = 0;
        this.storage = [];

        // add value and return value at the end of Stack
        this.push = (value) => {
            this.storage[this.count] = value;
            this.count++;
        };

        // this removes the value on on top of the stack 
        this.pop = () => {
            if (this.count === 0) {
                return undefined;
            }
            this.count--;
            let result = this.storage[this.count];
            delete this.storage[this.count];
            return result;
        };

        // this returns the peek element
        this.peek = () => {
            if (this.count === 0) {
                return undefined;
            }
            return this.storage[this.count - 1];
        };

        // this returns the size of the stack
        this.size = () => { return this.count; };
    }
}

let myStack = new Stack();
myStack.push(12);
myStack.push(10);
myStack.push(799);
myStack.pop();
myStack.push(23);
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack);
console.log("I am a Stack");