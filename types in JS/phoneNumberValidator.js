let phone = "102-4321";
let phone2 = "1234567"

function validator(num){
     if (num.length > 8 || num.length < 7){
          return false;
     }
     let first = num.substring(0, 3);
     let second = num.substring(num.length - 4);
     if (isNaN(first) || isNaN(second)){
          return false;
     } 
     if (num.length === 8){
          return num.charAt(3) === "-";
     }
     return true;
}

console.log(validator(phone));
console.log(validator(phone2));