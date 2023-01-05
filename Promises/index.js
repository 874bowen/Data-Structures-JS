// Traditional: handling async operations

// const cart = ["snacks", "pants", "tingting" ];

// createOrder(cart, function(orderId){
//    proceedToPayment(orderId);
// });

// const promise = createOrder(cart);

/*
 {data: undefined}
 after some time 
 {data: somedata}
*/

// promises gives us the control for our functions

// promise.then(function(orderId) {
//    proceedToPayment(orderId);
// })

// const GITHUB_API = "https://api.github.com/users/874bowen"

// const user = fetch(GITHUB_API);

// console.log(user);


const values = [];
values.push([6, 7])
console.log(values);
let index = -1
for (let i = 0; i < values.length; i++){
   let [k, v] = values[i];
   if (k == 2) index = i;
}
console.log("index ", index);
values[index] = [2, 6];
console.log("values", values);

for (let pair of values){
   let [k, v] = pair;
   if (k == 2) console.log(v);
}

const val = values.filter(([m, n]) => {
   return 
})

if (val.length > 0) console.log(true);
else console.log(-1);

console.log(val);