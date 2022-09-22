let user = {
     name: "Ivan",
     address: {
          personal: {
               city: "Eldoret",
               area: "Pioneer"
          },
          office: {
               city: "Nairobi",
               area: "Westlands",
               site: { 
                    remote: false,
                    urban: true
               }
          }
     },
     phone: "0791440095"
}

let finalObj = {};
let magic = (obj, parent) => {
     for(let key in obj){
          if(typeof(obj[key]) === 'object'){
               magic(obj[key], parent+"_"+key);
          } else{
               finalObj[parent+"_"+key] = obj[key];
          }
     }
     return finalObj;
}

let magic1 = magic(user, "user");
console.log(magic1);