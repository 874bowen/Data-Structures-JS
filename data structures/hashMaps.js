var hash = (string, max) => {
     var hash = 0;
     for (let i = 0; i < string.length; i++) {
          hash += string.charCodeAt(i);
     }
     return hash % max;
}

// function expression
let HashTable = function() {
     let storage = [];
     const storageLimit = 4;

     this.print = function() {
          console.log(storage);
     }
     this.add = function (key, value) {
          var index = hash(key, storageLimit);
          if (storage[index] === undefined) {
               storage[index] = [
                    [key, value]
               ]
          } else {
               var inserted = false;
               for (let i = 0; i < storage[index].length; i++) {
                    if (storage[index][i][0] === key){
                         storage[index][i][0] = value;
                         inserted = true;  
                    }
               }
               if (inserted === false){
                    storage[index].push([key, value]);
               }
          }
     };
     this.remove = function(key) {
          var index = hash(key, storageLimit);
          if (storage[index].length === 1 && storage[index][0][0] === key){
               delete storage[index];
          } else {
               for (let i = 0; i < storage[index].length; i++) {
                    if (storage[index][i][0] === key){
                         delete storage[index][i];
                    }
               }
          }
     };
     this.lookup = function(key){
          var index = hash(key, storageLimit);
          if (storage[index] = undefined){
               return undefined;
          } else{
               for (let i = 0; i < storage[index].length; i++) {
                    if(storage[index][i][0] === key) {
                         return storage[index][i][1];
                    }
               }
          }
     };
}

console.log(hash("ivan", 10));
console.log(hash("bowen", 10));
console.log(hash("idah", 10));
console.log(hash("ian", 10));
console.log(hash("Monic", 10));
console.log(hash("Chep", 10));

let ht = new HashTable();
ht.add("ivan", "person");
ht.add("foxy", "dog");
ht.add("sky", "cow");
ht.add("browny", "cat");

console.log(ht.lookup("foxy"));
ht.print();