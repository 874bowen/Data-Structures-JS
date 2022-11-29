let now = new Date();

console.log("----------------------------------\n");
console.log(now);

let dateString = now.toString();
console.log("----------------------------------\n");
console.log(dateString);

let year = now.getFullYear();
console.log("----------------------------------\n");
console.log(year);

let dayOfWeek = now.getDay();
console.log("----------------------------------\n");
console.log(dayOfWeek);

let newDate = new Date("May 1, 1983 08:03 pm");
console.log("----------------------------------\n");
console.log(newDate);