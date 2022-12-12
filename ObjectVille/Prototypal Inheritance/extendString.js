String.prototype.cliche = function () {
   let cliche = ["lock and load", "touch base", "open the kimono"];

   for (let i = 0; i < cliche.length; i++) {
      let index = this.indexOf(cliche[i])
      if (index >= 0) return true;
   }
   return false;
}

String.prototype.palindrome = function () {
   var r = this.split("").reverse().join("");
   return (r === this.valueOf());
}
console.log("racecar".palindrome());
let sentences = ["i'll send my car around to pick you up.", "Let's touch base in the morning and see where we are.", "We don't want to open the kimono, we just want to inform them"];

for (let i = 0; i < sentences.length; i++) {
   let phrase = sentences[i];
   if (phrase.cliche()) console.log("CLICHE ALERT: " + phrase);
}