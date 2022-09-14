function mySet() {
     let collection = [];
     this.has= (elem)=> {
          return collection.indexOf(elem) !== -1;
     }
     this.values = () => {
          return collection;
     }
     this.add = (elem) => {
          if(!this.has(elem)){
               collection.push(elem);
               return true;
          }
     }
     this.remove = (elem) => {
          if(this.has(elem)){
               let index = collection.indexOf(elem);
               collection.splice(index, 1);
               return true;
          }
     }
     this.union = (otherSet) => {
          let unionSet = [];
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
     this.intersection = () => {
          let intersectionSet = [];
          let secondSet = otherSet.values();
          secondSet.forEach(element => {
               if (this.has(element)){
                    intersectionSet.add(element);
               }
          });
          return intersectionSet;
     }
     this.difference = (otherSet) => {
          let differenceSet = [];
          let secondSet = otherSet.values();
          secondSet.forEach(element => {
               if (!this.has(element)){
                    differenceSet.add(element);
               }
          });
          return differenceSet;
     }
     this.subset = (otherSet) => {
          let firstSet = this.values();
          return firstSet.every(function(value){
               return otherSet.has(value);
          });
     }
     this.size = () => {
          return collection.length;
     }
}

let setA = new mySet();
let setB = new mySet();
setA.add("a");
setA.add("f")
setB.add("b");
setB.add("f")
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.values());
console.log(setB.values());
