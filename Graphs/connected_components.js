const graph1 = 
{
     a: ["c", "b"],
     b: ["d"],
     c: ["e"],
     d: [],
     e: [],
     f: []
}

const connected_components = (graph) => {
     let count = 0;
     let visited = new Set();
     for (let node in graph){
          if (explore(graph, node, visited)) count++;
     }
     
     return count;
}

const explore = (graph, current, visited) => {
     if (visited.has(String(current))) return false;
     visited.add(String(current));
     for (let neighbor of graph[current]){
          explore(graph, neighbor, visited);
     }
     return true;
}

console.log(connected_components(graph1, "a"));