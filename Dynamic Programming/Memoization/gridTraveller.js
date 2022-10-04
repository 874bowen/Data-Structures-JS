function gridTraveller(m, n, memo = {}) {
     let key = m + "," + n;
     if (key in memo) return memo[key];
     if (m === 1 && n === 1) return 1;
     if (m === 0 || n === 0) return 0;
     return memo[key] = gridTraveller(m-1, n, memo) + gridTraveller(m, n-1, memo);
}

console.log(gridTraveller(1, 1))
console.log(gridTraveller(2, 3))
console.log(gridTraveller(18, 18))