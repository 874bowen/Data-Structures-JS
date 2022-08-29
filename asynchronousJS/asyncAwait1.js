let stocks = {
     Fruits: ["strawberry", "grapes", "banana", "apple"],
     liquid: ["water", "ice"],
     holder: ["cone", "cup", "stick"],
     toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

let toppings_choice = () => {

     return new Promise((resolve, reject) => {
          setTimeout(()=>{
               resolve(console.log("Which toppings do you like ? "));
          }, 3000);
     });
};

async function kitchen (){
     console.log(" STEP 1 ");
     console.log(" STEP 2 ");
     console.log(" STEP 3 ");
     await toppings_choice();
     console.log(" STEP 4 ");
     console.log(" STEP 5 ");
}
kitchen();

console.log("Doing dishes continues ... ");
console.log("Cleaning the tables ... ");
console.log("Taking other orders ... ");