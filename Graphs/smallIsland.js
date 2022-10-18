const grid = [
     ["W", "L", "W", "W", "W"],
     ["W", "L", "W", "W", "W"],
     ["W", "W", "W", "L", "W"],
     ["W", "W", "L", "L", "W"],
     ["L", "W", "L", "L", "W"],
     ["L", "L", "W", "W", "W"]
]

const small_island = (grid) => {
     let smallest = Infinity;
     let visited = new Set();
     for(let i = 0; i < grid.length; i++){
          for(let j = 0; j < grid[0].length; j++){
               let count = exploreCount(grid, i, j, visited)//TODO
               if (count > 0 && count < smallest) smallest = count;
          }
     }
     return smallest;
}

const exploreCount = (grid, r, c, visited) => {
     let rowInbounds = 0 <= r && r < grid.length;
     let colInbounds = 0 <= c && c < grid[0].length;
     if (!rowInbounds || !colInbounds) return 0;
     if (grid[r][c] === "W") return 0;
     let key = r + "," + c;
     if (visited.has(key)) return 0;
     visited.add(key);
     let sum = 1;
     sum += exploreCount(grid, r-1, c, visited);
     sum += exploreCount(grid, r+1, c, visited);
     sum += exploreCount(grid, r, c-1, visited);
     sum += exploreCount(grid, r, c+1, visited);
     return sum;

}

console.log(small_island(grid));