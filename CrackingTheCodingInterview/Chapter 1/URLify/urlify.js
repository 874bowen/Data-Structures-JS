const urlifyOne = (str) => {
   let result = "";
   str = str.split(" ");
   for (let i = 0; i < str.length; i++){
      result += str[i];
      if (i === str.length-1) break;
      result += "%20";
   }
   return result;
}
console.log(urlifyOne("The cat ran away"));

const urlifyTwo = (str) => {
   str = str.split(" ");
   str = str.join("%20")
   return str;
}

console.log(urlifyTwo("The best thing in the world"));