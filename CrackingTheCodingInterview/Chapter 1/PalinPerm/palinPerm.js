const palinPerm = (str) => {
   str = str.replaceAll(" ", "").toLowerCase();
   let count = {};
   for (let i = 0; i < str.length; i++){
      if (count[str[i]]) count[str[i]] += 1;
      else count[str[i]] = 1;
   }
      
   let oddCounter = 0;
   for (let key in count){
      if (count[key] % 2 !== 0) oddCounter++;
   }
   

   return oddCounter < 2;
}

console.log(palinPerm("Tact Coat"), 'false');
console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');