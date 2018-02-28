const graph = {
  vertices: [
    {
      name: 'Broadband1',
      type: 'bb',
      price: 40,
    },
    {
      name: 'TV1',
      type: 'tv',
      price: 50,
    },
    {
      name: 'Landline',
      type: 'll',
      price: 35,
    },
    {
      name: 'Broadband2',
      type: 'bb',
      price: 60,
    },
    {
      name: 'TV2',
      type: 'tv',
      price: 120,
    },
    {
      name: 'AddonBB',
      type: 'addon',
      price: 10,
    },
    {
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
    []
  ],
};
export default graph;
