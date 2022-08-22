let num = [1, 1, 1, 1, 1];
console.log(num.splice(0, 1));

console.log("######");

let total = [];
function partition(numbers) {
	let d = 15;
	let m = 4;
     if (numbers.length > m){
          for (let i = 0; i < numbers.length-m+1; i++) {
               let tot = 0;
               for (let j = i; j < i+m; j++) {
                    tot += numbers[j];
               }
               if (tot == d && i==0){
                    total.push(numbers.splice(i, m));
                    partition(numbers);
               }
               else if (tot == d && i!=0){
                    total.push(numbers.splice(0, i));
                    total.push(numbers.splice(0, m));
                    partition(numbers);
               } else if (i === numbers.length-m){
                    console.log("Numbers here is: "+ numbers);
                    total.push(numbers.splice(0, numbers.length));
               } 
          } 
     }else {
          total.push(numbers);
     }
	console.log("Total: ", total);
     console.log(numbers);
	// console.log(number);
     return total.length;
}

console.log(partition([4, 5, 4, 2, 4, 5, 2, 3, 2, 1, 1, 5, 4]));