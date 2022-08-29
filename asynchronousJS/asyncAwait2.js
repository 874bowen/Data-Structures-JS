let stocks = {
     Fruits: ["strawberry", "grapes", "banana", "apple"],
     liquid: ["water", "ice"],
     holder: ["cone", "cup", "stick"],
     toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

function time(ms){
     return new Promise((resolve, reject)=>{
          if(is_shop_open){
               setTimeout(resolve, ms)
          }
          else{
               reject("Shop is closed!");
          }
     });
}

async function kitchen(){
     try{
          await time(2000);
          console.log(`${stocks.Fruits[0]}`);

          await time(0000);
          console.log("Start the production");

          await time(2000);
          console.log("The fruit has been chopped");

          await time(1000);
          console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

          await time(1000);
          console.log("The machine was started");

          await time(2000);
          console.log(`Ice cream was placed on a ${stocks.holder[0]}`);

          await time(3000);
          console.log(`${stocks.toppings[0]} flavor was used as toppings`);
          
          await time(2000);
          console.log("ice cream served cold");
     }
     catch(error){
          console.log("customer left", error);
     }
     finally{
          console.log("We are done with today");
     }
}

kitchen();