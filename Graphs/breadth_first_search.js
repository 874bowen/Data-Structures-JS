const graph = 
{
     a: ["c", "b"],
     b: ["d"],
     c: ["e"],
     d: ["f"],
     e: [],
     f: []
}
const breadth_first_iteratively = (graph, source) => {
     let queue = [source];
     for ( ;queue.length > 0; ){
          let current = queue.shift();
          console.log(current);
          for (let neighbor of graph[current]){
               queue.push(neighbor);
          }
     }
}

breadth_first_iteratively(graph, "a");

const breadth_first_recursively = (graph, source) => {
     // there's no recursive breadth first
}

breadth_first_recursively(graph, "a");