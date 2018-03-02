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

  buildCombinations() {
    this.vertices.forEach(vertice => {
      this.vertexCombination(vertice, []);
    });
  }

  getCombinations() {
    return this.combinations.map((plan, i) => ({
      plan,
      price: this.prices[i],
    })).sort((a, b) => a.price - b.price);
  }
}

export default BundleProvider;
