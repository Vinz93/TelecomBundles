import httpStatus from 'http-status';

import { paginate } from '../helpers/utils';
import { APIError } from '../helpers/errors';

const BundleController = {
  /**
   * @swagger
   * /users:
   *   get:
   *     tags:
   *      - User
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
   *         description: return an array of users'
   */

  async readAll(req, res) {
    const offset = paginate.offset(req.query.offset);
    const limit = paginate.limit(req.query.limit);

    const find = req.query.find || {};
    const sort = req.query.sort || {
      createdAt: 1,
    };

    res.json({
      find,
      sort,
    })
  },
};

export default BundleController;
