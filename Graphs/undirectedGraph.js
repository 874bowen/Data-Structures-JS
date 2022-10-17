const edges = [
     ['i', 'j'],
     ['k', 'i'],
     ['m', 'k'],
     ['k', 'l'],
     ['o', 'n']
]
const undirected = (edges, src, dst) => {
     const graph = buildGraph(edges);
     return hasPath(graph, src, dst, new Set());
}
const hasPath = (graph, src, dst, visited) => {
     if (visited.has(src)) return false;
     if (src === dst) return true;
     visited.add(src);
     for (let neighbor of graph[src]){
          if (hasPath(graph, neighbor, dst, visited)) return true;
     }
     return false;
}
const buildGraph = (edges) => {
     let graph = {};
     for (let edge of edges){
          const [a, b] = edge;
          if (!(a in graph)) graph[a] = [];
          if (!(b in graph)) graph[b] = [];
          graph[a].push(b);
          graph[b].push(a);
     }
     return graph;
}

console.log(undirected(edges, 'i', 'n'));