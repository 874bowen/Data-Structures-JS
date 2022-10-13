const fib = (n) => {
     const table = Array(n+1).fill(0);
     table[1] = 1;
     for (let i = 0; i <= n; i++){
          table[i+1] += table[i];
          table[i+2] += table[i];
     }
     return table[n];
}

console.log(fib(6)); // 8
console.log(fib(7)); // 23
console.log(fib(8)); // 21
console.log(fib(50)); // 12586269025

console.log("---------------------------");
const fibo = (n) => {
     if (n === 0) return 0;
     if (n === 1) return 1;
     return fib(n-1) + fib(n-2)
}

console.log(fibo(6)); // 8
console.log(fibo(7)); // 23
console.log(fibo(8)); // 21
console.log(fibo(50)); // 12586269025