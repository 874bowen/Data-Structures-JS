/* SETS 
    - an array with no duplicate items and have no particular order
    - used in checking for presence of an element in an array
    - has() - check presence
    - values() - retrieve all values
    - add() - push to collection
    - remove() - remove an element --delete--
    - size() 
    - union() - combine two sets
    - intersection() - intersection of two sets
    - difference() - all elements in one set but not in another
    - subset() - returns true or false
*/

function mySet() {
    // hold the set
    let collection = [];
    // check for presence of an element
    this.has = (element) => {
        return (collection.indexOf(element) !== -1);
    }
    // return values
    this.values = () => {
        return collection;
    }
    // add() - push to collection
    this.add = (element) => {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
    }
    // remove() - remove an element --delete--
    this.remove = (element) => {
        if(this.has(element)){
            let index = collection.indexOf(element);
            collection.splice(index, 1); // take out an element starting from index and 1 element only
            return true;
        }
        return false;
    }
    // size() 
    this.size = () => {
        return collection.length;
    }
    // union() - combine two sets
    this.union = (otherSet) => {
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(element => {
            unionSet.add(element);
        });
        secondSet.forEach(element => {
            unionSet.add(element);
        });
        return unionSet;
    }
    // intersection() - intersection of two sets
    this.intersection = (otherSet) => {
        let secondSet = otherSet.values();
        let intersectionSet = new mySet();
        secondSet.forEach((element) => {
            if (this.has(element)){
                intersectionSet.add(element);
            }
        });
        return intersectionSet;
    }
    // difference() - all elements in one set but not in another
    this.difference = (otherSet) => {
        let secondSet = otherSet.values();
        let differenceSet = new mySet();
        secondSet.forEach((element) => {
            if (!this.has(element)){
                differenceSet.add(element);
            }
        });
        return differenceSet;
    }
    // subset() - returns true or false
    this.subset = (otherSet) => {
        let firstSet = this.values();
        return firstSet.every(function(value){ // test whether all elements in array pass the test inside it
            return otherSet.has(value);
        });
    }
}

let setA = new mySet();
let setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.values());
console.log(setB.values());

let arr = [1, 3, 3, 5, 6, 2, 1];
let col = new Set();
let countArr = [];
let count = 0;
console.log(arr);
arr.forEach(element => {
    col.add(element);
});
console.log(col);
for (let i = 0; i < col.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        console.log(col[i]);
        if(col[i] == arr[j]) {
            count += 1;
            console.log(count);
        }
    }
    countArr.push(count);
    count = 0;
}
console.log(countArr);