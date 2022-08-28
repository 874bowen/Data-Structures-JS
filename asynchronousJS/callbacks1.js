/**
 * #1 Place Order             -> 2s
 * Start production
 * #2 Cut The Fruit           -> 2s
 * #3 Add water and ice       -> 1s
 * #4 Start the machine       -> 1s
 * #5 Select Container        -> 2s
 * #6 Select Toppings         -> 3s
 * #7 Serve Ice Cream         -> 2s
 */

let stocks = {
     Fruits: ["strawberry", "grapes", "banana", "apple"],
     liquid: ["water", "ice"],
     holder: ["cone", "cup", "stick"],
     toppings: ["chocolate", "peanuts"]
};

let order = (fruit_index, call_production) => {
     setTimeout(() => {
          console.log(`${stocks.Fruits[fruit_index]} was selected`);
          call_production();
     }, 2000);
}
let production = () => {
     setTimeout(() => {
          console.log("order recieved now, starting production");
          setTimeout(() => {
               console.log("The fruit has been chopped ");
               setTimeout(() => {
                    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                    setTimeout(() => {
                         console.log("The machine was started");
                         setTimeout(() => {
                              console.log(`Ice cream was placed on a ${stocks.holder[0]}`);
                              setTimeout(() => {
                                   console.log(`${stocks.toppings[0]} flavor was used as toppings`);
                                   setTimeout(() => {
                                        console.log("Ice cream served");
                                   }, 2000);
                              }, 3000);
                         }, 2000);
                    }, 1000);
               }, 1000);
          }, 2000);
     }, 000);
}
order(0, production);