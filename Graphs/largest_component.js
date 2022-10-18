const graph1 = 
{
     a: ["c", "b"],
     b: ["d"],
     c: ["e"],
     d: [],
     e: [],
     f: []
}

const largest_component = (graph) => {
     let largest = 0;
     let visited = new Set();
     for (let node in graph){
          let size = exploreSize(graph, node, visited); 
          if (size > largest) largest = size;
     }
     return largest;
}

const exploreSize = (graph, node, visited) => {
     if (visited.has(String(node))) return 0;
     visited.add(String(node));
     let size = 1;
     for(let neighbor of graph[node]){
          size += exploreSize(graph, neighbor, visited)
     }
     return size;
}
console.log(largest_component(graph1));