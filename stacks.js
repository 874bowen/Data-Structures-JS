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
