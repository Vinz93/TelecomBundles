import graph from '../graph';
const { vertices, edges } = graph;

class BundleProvider {
  constructor(vertices, edges) {
    this.vertices = vertices;
    this.edges = edges;
    this.combinations = [];
    this.prices = [];
  }

  bundlePrice(bundle) {
    return bundle.reduce((acum, vertex, i, bundle) => {
      const [nextVertex, vertexPrice] = [bundle[i + 1], vertex.price || 0];
      let edgeCost = 0;
      if (!!nextVertex) {
        edgeCost = this.edges[vertex.id].find(edge => nextVertex.id === edge[0])[1];
      }
      return acum + vertexPrice + edgeCost;
    }, 0);
  }

  vertexCombination(vertex, stack) {
    let stackAux = [...stack, vertex];
    this.prices = [...this.prices, this.bundlePrice(stackAux)];
    this.combinations = [...this.combinations, stackAux];
    for (const i in this.edges[vertex.id]) {
      this.vertexCombination(this.vertices[this.edges[vertex.id][i][0]], stackAux);
    }
    stackAux = [...stack.slice(0, stack.lenght)];
  }

  graphCombinations() {
    this.vertices.forEach(vertice => {
      this.vertexCombination(vertice, []);
    });
  }
  printCombinations() {
    this.combinations.forEach((bundle, i) => {
      console.log(bundle);
      console.log(`total = ${this.prices[i]}`);
      console.log(`
        `);
    });
  }
}

const trial = new BundleProvider(vertices, edges);
trial.graphCombinations();
trial.printCombinations();

export default BundleProvider;
