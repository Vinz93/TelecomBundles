const URL = 'http://localhost:3000/bundles';

export const fetchBundles = () => fetch(URL).then(res => res.json());
