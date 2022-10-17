const edges = [
     ['i', 'j'],
     ['k', 'i'],
     ['m', 'k'],
     ['k', 'l'],
     ['o', 'n']
]
const undirected = (edges, src, dst) => {
     const graph = buildGraph(edges);
     return hasPath(graph, src, dst);
}
const hasPath = (graph, src, dst) => {
     if (src === dst) return true;
     for (let neighbor of graph[src]){
          if (hasPath(graph, neighbor, dst)) return true;
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

undirected(edges, 'i', 'l');