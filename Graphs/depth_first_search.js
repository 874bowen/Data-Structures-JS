const graph = 
{
     a: ["c", "b"],
     b: ["d"],
     c: ["e"],
     d: ["f"],
     e: [],
     f: []
}

const depth_first_iteratively = (graph, source) => {
     let stack = [ source ];
     for ( ; stack.length > 0 ; ){
          let current = stack.pop();
               console.log(current);
          for (let neighbor of graph[current]){
               stack.push(neighbor)
          }
     }
}

depth_first_iteratively(graph, "a");
console.log("----------------------------------------");

const depth_first_recursively = (graph, source) => {
     console.log(source);
     for ( let neighbor of graph[source]){
          depth_first_recursively(graph, neighbor)
     }
}

depth_first_recursively(graph, "a");