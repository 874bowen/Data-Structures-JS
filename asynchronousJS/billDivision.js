for (const sock of Object.entries(socks)) {
     pairs += Math.floor(sock[1]/2);
}



// some async await here
/*
let is_shop_open = true;

let order = (time, work) => {

     return new Promise((resolve, reject) => {
          if(is_shop_open){
               resolve(work());
          } else{
               reject(console.log("Err"));
          }
     });
};
*/
// .then().then().then().catch().finally()
// code above is same as code below

async function order (){
     try{
          await abc;
     }
     catch(error){
          console.log("abc doesn't exist");
     }
     finally{
          console.log("This code runs anyway");
     }
};

order()
.then(()=>{
     console.log("This does the chaining");
})