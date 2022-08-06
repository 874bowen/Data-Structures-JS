/* stacks! */

/*problem: find a palindrome word */

let letters = [];

let word = "racecar";

let rword = "";

// put the letters of the word into a stack
for (let i = 0; i <= word.length; i++){
    letters.push(word[i]);
}

// add the letters to reverse word by popping them
for (let i = 0; i <= letters.length; i++){
    rword += letters.pop();
}

// check if rword is equal to the original word
if (word === rword){
    console.log(word + " is a palindrome!");
}
else{
    console.log(word + " is NOT a palindrome");
}