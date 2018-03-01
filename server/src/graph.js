const graph = {
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
    []
  ],
};
export default graph;
