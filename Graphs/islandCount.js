const grid = [
     ["W", "L", "W", "W", "W"],
     ["W", "L", "W", "W", "W"],
     ["W", "W", "W", "L", "W"],
     ["W", "W", "L", "L", "W"],
     ["L", "W", "L", "L", "W"],
     ["L", "L", "W", "W", "W"]
]

const island_count = (grid) => {
     let visited = new Set();
     let count = 0;
     for (let i = 0; i  < grid.length; i++){
          for (let j = 0; j  < grid[0].length; j++){
               if (explore(grid, i, j, visited)) count++;
          }
     }
     return count;
}

const explore = (grid, r, c, visited) => {
     let rowInbounds = 0 <= r && r < grid.length;
     let colInbounds = 0 <= c && c < grid[0].length;
     if (!rowInbounds || !colInbounds) return false;

     if (grid[r][c] === "W") return false;
     let key = r + "," + c;
     if (visited.has(key)) return false;

     visited.add(key);

     explore(grid, r+1, c, visited);
     explore(grid, r-1, c, visited);
     explore(grid, r, c+1, visited);
     explore(grid, r, c-1, visited);

     return true;
}

console.log(island_count(grid));