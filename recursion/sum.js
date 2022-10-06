function sum(ar){
     if (ar.length === 0) return 0;
     return ar.shift() + sum(ar);
}

function slowSum(ar){
     if (ar.length === 0) return 0;
     const rest = ar.slice(1);
     return ar[0] + slowSum(rest);
}

const fastSum = (ar) => {
     return _sum(ar, 0)
}

const _sum = (ar, start) => {
     if (start === ar.length) return 0;
     return ar[start] + _sum(ar, start+ 1);
}

console.log(sum([1, 2, 3]));

const input = new Array(1500).fill(1)

const slowStart = Date.now();
console.log(slowSum(input));
const slowEnd = Date.now()
console.log(`The slow complexity of n^2 took ${slowEnd-slowStart} ms.`)

const fastStart = Date.now();
console.log(fastSum(input));
const fastEnd = Date.now()
console.log(`The faster complexity of n took ${fastEnd-fastStart} ms.`)

const Start = Date.now();
console.log(sum(input));
const End = Date.now()
console.log(`The faster complexity of n took ${End-Start} ms.`)