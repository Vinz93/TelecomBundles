import httpStatus from 'http-status';

import { APIError } from '../helpers/errors';
import services from '../graph.js';

const BundleController = {
  /**
   * @swagger
   * /bundles:
   *   get:
   *     tags:
   *      - Bundle
   *     description: Show all users
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: limit
   *         description: pagination limit.
   *         in: query
   *         required: false
   *         type: string
   *       - name: offset
   *         description: pagination offset.
   *         in: query
   *         required: false
   *         type: string
   *     responses:
   *       200:
   *         description: return an array of combinations'
   */

  async readAll(req, res) {
    const find = req.query.find || {};
    const sort = req.query.sort || {
      createdAt: 1,
    };

    res.json({
      find,
      sort,
    });
  },
};

export default BundleController;
