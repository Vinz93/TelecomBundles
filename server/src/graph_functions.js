import graph from './graph';
const { vertices, edges } = graph;

let combinations = [];

function printCombinations(combinations) {
  combinations.forEach((bundle, i) => {
    console.log(`bundle ${i})
    `);
    console.log(bundle);
    console.log(`========`);
  });
}

function vertexCombination(vertex, stack) {
  let stackAux = [...stack, vertex.name];
  combinations = [...combinations, stackAux];
  for (const i in edges[vertex.id]) {
    vertexCombination(vertices[edges[vertex.id][i][0]], stackAux);
  }
  stackAux = [...stack.slice(0, stack.lenght)];
}

// vertexCombination(vertices[3], []);
function graphCombinations() {
  vertices.forEach(vertice => {
    vertexCombination(vertice, []);
  });
}
graphCombinations();
printCombinations(combinations);
