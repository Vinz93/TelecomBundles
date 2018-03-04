import httpStatus from 'http-status';

import { APIError } from '../helpers/errors';
import BundleProvider from '../helpers/bundleProvider';
import graph from '../graph.js';
const { vertices, edges } = graph;

const BundleController = {
  /**
   * @swagger
   * /bundles:
   *   get:
   *     tags:
   *      - Bundle
   *     description: Show all combinations from the bundle schema
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: return an array of combinations'
   */

  async getAll(req, res) {
    const provider = new BundleProvider(vertices, edges);
    provider.buildCombinations();
    const response = provider.getCombinations();
    return res.status(httpStatus.OK).json(response);
  },
};

export default BundleController;
