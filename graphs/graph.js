class Graphs{
    constructor(){
        this.Graph  = {}
    }
    addVertex(Vertex){
        if(!this.Graph[Vertex]){
            this.Graph[Vertex] =  []
        }
    }

    addEdge(v1,v2){
            this.Graph[v1].push(v2)
            this.Graph[v2].push(v1)
    }

    printGraphh(){
        for(let vertex in this.Graph){
            console.log(vertex + " -> " + this.Graph[vertex].join(","))
        }
    }
}



const graph = new Graphs();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A", "B")
graph.addEdge("B", "A")
graph.addEdge("B", "C")
graph.addEdge("C", "A")

graph.printGraphh()


//---> Graph traversal
// bfs, bread first search
// goes through level by level, ideal to get into the sortest rout in no pondered graphs
function BFS(graph, start){
    const visited = new Set();
    const queue = [start]

    while(queue.length){
        const node = queue.shift();
        if(!visited.has(node)){
            console.log(node)
            visited.add(node)

            const neighbors = graph[node];
            for(let n of neighbors){
                if(!visited.has(n)) queue.push(n)
            }
        } 
    }
}

const g = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C"],
};

BFS(g, "A")