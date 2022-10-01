var numbersArray = [60, 50, 62, 58, 54, 54];
numbersArray.sort(compareNumbersAsc);
console.log(numbersArray)
numbersArray.sort(compareNumbersDesc);
console.log(numbersArray)


/*
* 1: place the first item after the second item
* 0: the items are equivalent, you can leave them in place
* -1: place the first item before the second item.
*/
function compareNumbersAsc(num1, num2){
     if (num1 > num2){
          return 1;
     } else if (num1 === num2){
          return 0;
     } else{
          return -1
     }
}
function compareNumbersDesc(num1, num2){
     if (num2 > num1){
          return 1;
     } else if (num1 === num2){
          return 0;
     } else{
          return -1
     }
}