import graph from './graph';
const { vertices, edges } = graph;

let combinations = [];
let prices = [];

function bundlePrice(bundle) {
  return bundle.reduce((acum, vertex, i, bundle) => {
    const [nextVertex, vertexPrice] = [bundle[i + 1], vertex.price || 0];
    let edgeCost = 0;
    if (!!nextVertex) {
      edgeCost = edges[vertex.id].find(edge => nextVertex.id === edge[0])[1];
    }
    return acum + vertexPrice + edgeCost;
  }, 0);
}
function printCombinations(combinations, prices) {
  combinations.forEach((bundle, i) => {
    console.log(bundle);
    console.log(`total = ${prices[i]}`);
    console.log(` 
      `);
  });
}

function vertexCombination(vertex, stack) {
  let stackAux = [...stack, vertex];
  prices = [...prices, bundlePrice(stackAux)];
  combinations = [...combinations, stackAux];
  for (const i in edges[vertex.id]) {
    vertexCombination(vertices[edges[vertex.id][i][0]], stackAux);
  }
  stackAux = [...stack.slice(0, stack.lenght)];
}

function graphCombinations() {
  vertices.forEach(vertice => {
    vertexCombination(vertice, []);
  });
}
graphCombinations();
printCombinations(combinations, prices);
