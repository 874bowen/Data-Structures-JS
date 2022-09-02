let phone = "123-4567";
let phone2 = "123kks4567"
function validator(phoneNumber) { 
     return phoneNumber.match(/^\d{3}-?\d{4}$/);
}

console.log(validator(phone));
console.log(validator(phone2));