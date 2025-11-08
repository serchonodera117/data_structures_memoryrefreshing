class WeightedGraph{
    constructor (){
        this.graph = new Map();
    }

    addVertex(vertex){
        if(!this.graph.has(vertex)){
            this.graph.set(vertex, new Map);
        }
    }

    addEdge(from, to, weight){
        if(!this.graph.has(from)) this.addVertex(from)
        if(!this.graph.has(to)) this.addVertex(to)

        this.graph.get(from).set(to, weight)
    }

    printGraph(){
        for(let [vertex, edges] of this.graph){
            let connections = [...edges.entries()]
            .map((to, w) => `${to}(${w})`)
            .join(",")

            console.log(`${vertex} -> ${connections}`)
        }
    }
}

const g = new WeightedGraph()
g.addEdge("A","B",4)
g.addEdge("A","C",2)
g.addEdge("B","C",5)
g.addEdge("B","D",10)
g.addEdge("D","C",3)

g.printGraph()

/* DIJKSTRA ALGORITHM
It works to fnde the shortest path from an origin node to the rest in a weighted grapg 

    asign a infinity deistance to all nodes excepting the origin node (0)
    uses a priority tail
    visists the closests node, updates it's neighbors distaces,
    repeat until it visits all nodes
*/


class PriorityQueue{
    constructor(){
        this.values = []
    }

    enqueue(node, priority){
        this.values.push({node, priority})
        this.values.sort((a,b) => a.priority - b.priority)
    }

    dequeue(){
        return this.values.shift();
    }
}

//DIJKSTRA ALGORITHM 

function dijstra(graph, start){
  const distances = {};
  const previous = {};
  const pq = new PriorityQueue();

  // Inicialización
  for (let [vertex] of graph.graph) {
    distances[vertex] = vertex === start ? 0 : Infinity;
    previous[vertex] = null;
  }

  pq.enqueue(start, 0);

  while (pq.values.length) {
    const { node: current } = pq.dequeue();

    for (let [neighbor, weight] of graph.graph.get(current)) {
      const newDist = distances[current] + weight;
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        previous[neighbor] = current;
        pq.enqueue(neighbor, newDist);
      }
    }
  }

  return { distances, previous };
}

const {distances, previous} = dijstra(g, "A")
// console.log("distances: ", distances)
// console.log("previous: ", previous)


function shortestpath(previous, start, end){
    const path  =[];
    let current = end;

    while(current){
        path.unshift(current)
        current = previous[current]
    }
    if(path[0] !== start) return null; //there's not conection

    return path
}

const path = shortestpath(g, "A", "D")
console.log("Ruta más corta A -> D", path)

