const graph = {
  vertices: [
    {
      name:'Broadband1',
      type: 'bb',
      price: 40,
    },
    {
      name:'TV1',
      type: 'tv',
      price: 50
    },
    {
      name:'Landline',
      type: 'll',
      price: 35,
    },
    {
      name:'Broadband2',
      type: 'bb',
      price: 60,
    },
    {
      name:'TV2',
      type: 'tv',
      price: 120,
    },
    {
      name:'AddonBB',
      type: 'addon',
      price: 10,
    },
    {
      name:'AddonTV',
      type: 'addon',
    },
  ],
  edges: [
    {
      from:'Broadband1',
      to: 'Landline'
      cost: -40,
    },
    {
      from:'Broadband1',
      to: 'AddonBB'
      cost: 0,
    },
    {
      from:'TV1',
      to: 'AddonTV'
      cost: 35,
    },
    {
      from:'TV1',
      to: 'Landline'
      cost: -10,
    },
    {
      from:'Broadband2',
      to: 'TV1'
      cost: -10,
    },
    {
      from:'Broadband2',
      to: 'Landline'
      cost: -40,
    },
    {
      from:'Broadband2',
      to: 'TV2'
      cost: -20,
    },
    {
      from:'Broadband2',
      to: 'AddonBB'
      cost: -10,
    },
    {
      from:'TV2',
      to: 'Landline'
      cost: -30,
    },
    {
      from:'TV2',
      to: 'AddonTV'
      cost: 15,
    },
  ],
}
