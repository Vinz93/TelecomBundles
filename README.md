# Telecom Bundles
Stack `React-Redux` | `Node.js`.

This application has a bundling schema's diagram that a service provider might
offer for a Broadband, TV, Landline. The Diagram is represented by the graph bellow.

```js
 {
  vertices: [
    {
      id: 0,
      name: 'Broadband1',
      type: 'bb',
      price: 40,
    },
    {
      id: 1,
      name: 'TV1',
      type: 'tv',
      price: 50,
    },
    {
      id: 2,
      name: 'Landline',
      type: 'll',
      price: 35,
    },
    {
      id: 3,
      name: 'Broadband2',
      type: 'bb',
      price: 60,
    },
    {
      id: 4,
      name: 'TV2',
      type: 'tv',
      price: 120,
    },
    {
      id: 5,
      name: 'AddonBB',
      type: 'addon',
      price: 10,
    },
    {
      id: 6,
      name: 'AddonTV',
      type: 'addon',
    },
  ],
  edges: [
    [[2, -40], [5, 0]],
    [[6, 35], [2, -10]],
    [],
    [[1, -10], [2, -40], [4, -20], [5, -10]],
    [[2, -30], [6, 15]],
    [],
    [],
  ],
};
```
The graph is represented by an **Adjacency List**, with a finite set of vertices and  ordered pair of edges.

In order to obtain all possible combinations of the bundling schema, I wrote a custom Class which uses a Depth First Traversal with a modification (bellow function) to generate all combinations.

server/src/helpers/bundleProvider.js
```js
vertexCombination(vertex, stack) {
  let stackAux = [...stack, vertex];
  this.prices = [...this.prices, this.bundlePrice(stackAux)];
  this.combinations = [...this.combinations, stackAux];
  for (const i in this.edges[vertex.id]) {
    this.vertexCombination(this.vertices[this.edges[vertex.id][i][0]], stackAux);
  }
  stackAux = [...stack.slice(0, stack.lenght)];
}
```

# Usage

## Server

### 1 Install dependencies
```
$ cd TelecomBundles/server && yarn install
```
### 2 Start server
```
$ yarn start
```
- The server is going to start in  http://localhost:3000/docs
- Swagger docs starts in  http://localhost:3000/docs
## Client

### 3 Install dependencies
```
$ cd TelecomBundles/client && yarn install
```
### 4 Start client
```
yarn start
```
Client starts in http://localhost:3001


## Author
Vincenzo Bianco
