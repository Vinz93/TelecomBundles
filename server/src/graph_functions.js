import graph from './graph';

function print(graph) {
  const { vertices, edges } = graph;
  const res = vertices.map(vertex => {
    return `${vertex} ->`
  })
  console.log(this.vertices.map(function(vertex) {
    return (vertex + ' -> ' + this.edges[vertex].join(', ')).trim();
  }, this).join(' | '));
};

console.log(graph);
