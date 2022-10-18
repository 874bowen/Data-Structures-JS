const edges = [
     ['w', 'x'],
     ['x', 'y'],
     ['z', 'y'],
     ['z', 'v'],
     ['w', 'v']
]

const smallest_path = (edges, nodeA, nodeB) => {
     let graph = buildGraph(edges);
     let visited = new Set([nodeA])
     let queue = [[nodeA, 0]];
     while (queue.length > 0){
          let [node, distance] = queue.shift();

          if (node === nodeB) return distance;

          for (let neighbor of graph[node]){
               if (!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push([neighbor, distance+1])
               }
          }
     }
     return -1;
}

const buildGraph = (edges) => {
     let graph = {};
     for (let edge of edges){
          let [a, b] = edge;
          if (!graph[a]) graph[a] = [];
          if (!graph[b]) graph[b] = [];
          graph[a].push(b);
          graph[b].push(a);
     }

     return graph;
}

console.log(smallest_path(edges, "w", "z"))