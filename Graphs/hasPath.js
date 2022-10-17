const graph = 
{
     a: ["c", "b"],
     b: ["d"],
     c: ["e"],
     d: [],
     e: [],
     f: ["d"]
}

const has_path_dfs = (graph, src, dst) => {
     if (src === dst) return true;
     for(let neighbor of graph[src]){
          if (has_path_dfs(graph, neighbor, dst)) return true
     }
     return false;
}

console.log(has_path_dfs(graph, "a", "e"));