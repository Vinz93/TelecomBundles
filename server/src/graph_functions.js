import graph from './graph';
const { vertices, edges } = graph;

const foo = function (a) {
  console.log(a);
};

function dfs(vertex, visited, fn) {
  visited[vertex.id] = true;
  if (edges[vertex.id]) fn(vertex.name);
  for (const i in edges[vertex.id]) {
    if (!visited[edges[vertex.id][i][0]]) {
      dfs(vertices[edges[vertex.id][i][0]], visited, fn);
    }
  }
}

dfs(vertices[3], [], foo);
