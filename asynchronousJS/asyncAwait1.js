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
// .then().then().then().catch().finally()
// code above is same as code below

async function order (){

}